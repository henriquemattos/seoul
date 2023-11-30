import * as fs from "fs";
import * as path from "path";

class Steal {
    X_API_KEY: string = "";

    schema: string = "https";
    host: string = "eprel.ec.europa.eu";
    path: string = "/api/products"; //  `${this.path}/${this.categories[0].path}`      /api/products/dishwashers2019
    page: number = 1;
    params: string = `&_limit=100&sort0=onMarketStartDateTS&order0=DESC&sort1=energyClass&order1=DESC`;

    headers: Headers = new Headers();
    directory: string = "models"

    categories = [
        {
            "category": "Dishwashers",
            "hits": 9609,
            "path": "dishwashers2019"
        }, {
            "category": "Washing machines",
            "hits": 14162,
            "path": "washingmachines2019"
        }, {
            "category": "Washer-dryers",
            "hits": 2105,
            "path": "washerdriers2019"
        }, {
            "category": "Displays",
            "hits": 19849,
            "path": "electronicdisplays"
        }, {
            "category": "Household and professional refrigeration",
            "hits": 34466,
            "path": "refrigeratingappliances2019"
        }, {
            "category": "Commercial refrigeration",
            "hits": 255219,
            "path": "refrigeratingappliancesdirectsalesfunction"
        }, {
            "category": "Tyres",
            "hits": 172231,
            "path": "tyres"
        }, {
            "category": "Light sources",
            "hits": 358960,
            "path": "lightsources"
        }, {
            "category": "Air conditioners",
            "hits": 16526,
            "path": "airconditioners"
        }, {
            "category": "Domestic ovens",
            "hits": 22933,
            "path": "ovens"
        }, {
            "category": "Range hoods",
            "hits": 17541,
            "path": "rangehoods"
        }, {
            "category": "Household tumble driers",
            "hits": 5795,
            "path": "tumbledriers"
        }, {
            "category": "Local space heaters",
            "hits": 15490,
            "path": "localspaceheaters"
        }, {
            "category": "Professional refrigerated storage cabinets",
            "hits": 19249,
            "path": "professionalrefrigeratedstoragecabinets"
        }, {
            "category": "Residential ventilation units",
            "hits": 4961,
            "path": "residentialventilationunits"
        }, {
            "category": "Solid fuel boilers",
            "hits": 2075,
            "path": "solidfuelboilers"
        }, {
            "category": "Packages of solid fuel boilers",
            "hits": 568,
            "path": "solidfuelboilerpackages"
        }, {
            "category": "Space heaters/Combination heaters",
            "hits": 35365,
            "path": "spaceheaters"
        }, {
            "category": "Packages of space heaters/combination heaters",
            "hits": 94455,
            "path": "spaceheaterpackages"
        }, {
            "category": "Temperature controls for space heaters",
            "hits": 781,
            "path": "spaceheatertemperaturecontrol"
        }, {
            "category": "Solar devices for space heaters",
            "hits": 180,
            "path": "spaceheatersolardevice"
        }, {
            "category": "Water heaters",
            "hits": 8857,
            "path": "waterheaters"
        }, {
            "category": "Packages of water heaters",
            "hits": 61,
            "path": "waterheaterpackages"
        }, {
            "category": "Hot water storage tanks for water heaters",
            "hits": 5765,
            "path": "hotwaterstoragetanks"
        }, {
            "category": "Solar devices for water heaters",
            "hits": 617,
            "path": "waterheatersolardevices"
        } // repealed energies? 6 categories like Televisions, Household washing machines, household dishwashers...
    ];

    /**
     * Verify if X_API_KEY exists in environment variables,
     * and then start the main functions. To set it, please
     * export X_API_KEY="YOUR_API_KEY"
     * replacing the placeholder with your key.
     */
    constructor() {
        this.X_API_KEY = process.env.X_API_KEY || "";
        if (!this.X_API_KEY) {
            throw new Error(`$$$ HRQ X_API_KEY is "${this.X_API_KEY}". Please define as an environment variable before running.`);
        }

        this.setHeaders();
        this.cleanDirectory();
        this.run();
    }

    /**
     * Set the custom request headers required by the API to allow the consumption.
     */
    private setHeaders(): void {
        this.headers.set("X-Requested-With", "XMLHttpRequest");
        this.headers.set("x-api-key", this.X_API_KEY);
    }

    /**
     * Read the defined directory ("models"), and for each existing file,
     * unlink if necessary, and delete the file permanently. 
     */
    private cleanDirectory(): void {
        fs.readdir(this.directory, (err, files) => {
            if (err) {
                throw new Error(`$$$ HRQ Error trying to read directory ${this.directory} with message "${err.message}" and code "${err.code}"`);
            }

            for (const file of files) {
                fs.unlink(path.join(this.directory, file), (err) => {
                    if (err) {
                        throw new Error(`$$$ HRQ Error trying to delete file ${file} with message "${err.message}" and code "${err.code}"`)
                    }
                });
            }
        });
    }

    /**
     * Asynchronous function fetch executed with await, in order for the iterating
     * looping to be more patient, and process the URL in the pagination order.
     */
    private async fetch(request: Request = new Request("")): Promise<void> {
        return await fetch(request).then((res) => res.json());
    }

    /**
     * Create the Request setting the headers, the mode, cache, and method,
     * for a given URL.
     */
    private getRequest(url: string = ""): Request {
        return new Request(url, {
            method: "GET",
            headers: this.headers,
            mode: "cors",
            cache: "default",
        });
    }

    /**
     * Loop all the categories available in the database, create one URL for each page available 
     * by dividing the total items in a category by the limit of each request, which is 100,
     * and when the request for each page is done, run all the fetch promises together,
     * create one JSON file for each, and write to file using appendFileSync, closing
     * the file afterwards.
     */
    private async run(): Promise<void> {
        this.categories.forEach(async (category) => {
            const allFetches = [];
            const filename = `./models/${category.path}.json`;

            this.page = 1;
            // @TODO: get the hits on the first fetch result, and from there we count the pagination.
            let pagination = Math.round(category.hits / 100);
            let quotient: number = category.hits % 100;
            while (pagination > 0 || quotient > 0) {
                const url = `${this.schema}://${this.host}${this.path}/${category.path}?_page=${this.page}${this.params}`;
                const request = this.getRequest(url);

                const fetchRequest = await this.fetch(request);
                allFetches.push(fetchRequest);
                this.page += 1;
                pagination -= 1;
                quotient -= 1;
            }
            await Promise.all(allFetches).then((dataset) => {
                const writeFile = fs.openSync(filename, 'w');
                fs.appendFileSync(filename, JSON.stringify(dataset));
                fs.closeSync(writeFile);
            });
        });
    }
}

new Steal();

