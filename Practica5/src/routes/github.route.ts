// githubRoutes.ts
import { Router } from 'express'
import { GitHubController } from '../controllers/GithubController'

const router = Router()
const gitHubController = new GitHubController()

// Define la ruta como '/repos'
router.get('/repos', gitHubController.showUserRepos)

export default router