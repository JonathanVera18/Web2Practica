// GitHubController.ts
import { Request, Response } from 'express'
import { GitHubRepository } from '../repositories/GithubRepository';

export class GitHubController  {
  async showUserRepos(req: Request, res: Response) {
    const github = new GitHubRepository();
    const token = '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'; // Reemplaza esto con tu token real

    try {
      const repos = await github.getUserRepos(token);
      res.json(repos);
    } catch (error) {
      console.error(error);
      res.status(500).send('Error al obtener repositorios del usuario');
    }
  }
}
