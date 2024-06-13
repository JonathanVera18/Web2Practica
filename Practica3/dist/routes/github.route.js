"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// githubRoutes.ts
const express_1 = require("express");
const GithubController_1 = require("../controllers/GithubController");
const router = (0, express_1.Router)();
const gitHubController = new GithubController_1.GitHubController();
// Define la ruta como '/repos'
router.get('/repos', gitHubController.showUserRepos);
exports.default = router;
