"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = "\n  type Categories {\n    categories: [String]\n  }\n\n  type Joke {\n    id: ID\n    created_at: String\n    icon_url: String\n    updated_at: String\n    url: String\n    value: String\n    categories: [String]\n  }\n\n  type Query {\n    categories: Categories,\n    random(category: String): Joke\n  }\n";
