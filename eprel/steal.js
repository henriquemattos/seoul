"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var path = require("path");
var Steal = /** @class */ (function () {
    function Steal() {
        this.X_API_KEY = "";
        this.schema = "https";
        this.host = "eprel.ec.europa.eu";
        this.path = "/api/products"; //  `${this.path}/${this.categories[0].path}`      /api/products/dishwashers2019
        this.page = 1;
        this.params = "&_limit=100&sort0=onMarketStartDateTS&order0=DESC&sort1=energyClass&order1=DESC";
        this.headers = new Headers();
        this.directory = "models";
        this.categories = [
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
        this.X_API_KEY = process.env.X_API_KEY || "";
        if (!this.X_API_KEY) {
            throw new Error("$$$ HRQ X_API_KEY is \"".concat(this.X_API_KEY, "\". Please define as an environment variable before running."));
        }
        this.setHeaders();
        this.cleanDirectory();
        this.run();
    }
    Steal.prototype.setHeaders = function () {
        console.debug("$$$ HRQ is settings the headers");
        this.headers.set("X-Requested-With", "XMLHttpRequest");
        this.headers.set("x-api-key", this.X_API_KEY);
        console.debug("$$$ HRQ is done settings the headers");
    };
    Steal.prototype.cleanDirectory = function () {
        var _this = this;
        console.debug("$$$ HRQ is cleaning the models directory");
        fs.readdir(this.directory, function (err, files) {
            if (err) {
                throw new Error("$$$ HRQ Error trying to read directory ".concat(_this.directory, " with message \"").concat(err.message, "\" and code \"").concat(err.code, "\""));
            }
            var _loop_1 = function (file) {
                fs.unlink(path.join(_this.directory, file), function (err) {
                    if (err) {
                        throw new Error("$$$ HRQ Error trying to delete file ".concat(file, " with message \"").concat(err.message, "\" and code \"").concat(err.code, "\""));
                    }
                });
            };
            for (var _i = 0, files_1 = files; _i < files_1.length; _i++) {
                var file = files_1[_i];
                _loop_1(file);
            }
        });
        console.debug("$$$ HRQ is done cleaning the models directory");
    };
    Steal.prototype.fetch = function (request) {
        if (request === void 0) { request = new Request(""); }
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, fetch(request).then(function (res) { return res.json(); })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    Steal.prototype.run = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                console.debug("$$$ HRQ is stealing the data");
                this.categories.forEach(function (category) { return __awaiter(_this, void 0, void 0, function () {
                    var allFetches, filename, writeFile, pagination, quotient, url, request, fetchRequest;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                allFetches = [];
                                filename = "./models/".concat(category.path, ".json");
                                writeFile = fs.openSync(filename, 'w');
                                console.debug("$$$ HRQ Filename has been written: ".concat(filename));
                                this.page = 1;
                                pagination = Math.round(category.hits / 100);
                                quotient = category.hits % 100;
                                _a.label = 1;
                            case 1:
                                if (!(pagination > 0 || quotient > 0)) return [3 /*break*/, 3];
                                url = "".concat(this.schema, "://").concat(this.host).concat(this.path, "/").concat(category.path, "?_page=").concat(this.page).concat(this.params);
                                console.debug("$$$ HRQ Looping URL: ".concat(url));
                                request = new Request(url, {
                                    method: "GET",
                                    headers: this.headers,
                                    mode: "cors",
                                    cache: "default",
                                });
                                return [4 /*yield*/, this.fetch(request)];
                            case 2:
                                fetchRequest = _a.sent();
                                allFetches.push(fetchRequest);
                                this.page += 1;
                                pagination -= 1;
                                quotient -= 1;
                                return [3 /*break*/, 1];
                            case 3: return [4 /*yield*/, Promise.all(allFetches).then(function (dataset) {
                                    console.debug("$$$ HRQ is writing the dataset on ".concat(filename, "."));
                                    fs.appendFileSync(filename, JSON.stringify(dataset));
                                    console.debug("$$$ HRQ is done writing the dataset on ".concat(filename, "."));
                                })];
                            case 4:
                                _a.sent();
                                fs.closeSync(writeFile);
                                return [2 /*return*/];
                        }
                    });
                }); });
                console.debug("$$$ HRQ is done stealing the data");
                return [2 /*return*/];
            });
        });
    };
    return Steal;
}());
new Steal();
