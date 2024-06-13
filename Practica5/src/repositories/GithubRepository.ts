import axios, { AxiosResponse, AxiosError } from 'axios';
const token = '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'
interface GitHubRepo {
  id: number;
  name: string;
  // Otros campos relevantes del repositorio
}

export class GitHubRepository {
  async getUserRepos(token: string): Promise<GitHubRepo[]> {
    try {
      const response: AxiosResponse<GitHubRepo[]> = await axios.get('https://api.github.com/user/repos', {
        headers: {
          'Authorization': `token ${token}`
        }
      });
    
      if (response.status === 200) {
        return response.data;
      } else {
        throw new Error(`Error fetching repos: ${response.statusText}`); // More specific error message
      }
    } catch (error: any) {
      if (error.response) {
        // La solicitud se realizó pero el servidor respondió con un código de estado diferente de 2xx
        console.error('Error de respuesta:', error.response.data);
        throw new Error('Error al obtener repositorios del usuario');
      } else if (error.request) {
        // La solicitud se hizo pero no se recibió respuesta
        console.error('No se recibió respuesta del servidor');
        throw new Error('Error de conexión al obtener repositorios del usuario');
      } else {
        // Se produjo un error al configurar la solicitud
        console.error('Error al configurar la solicitud:', error.message);
        throw new Error('Error al configurar la solicitud');
      }
    }
  }
}