import { ApiService } from "../api/apiService";

export class DocService extends ApiService {
    async getAllDocuments(token: string | null) {
        if (!token) {
            throw new Error('No token provided');
          }
        return this.get("/documentos/all", token);
    }
}
