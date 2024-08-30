import { ApiService } from "../api/apiService";

export class DocService extends ApiService {
    async getAllDocuments() {
        return this.get("/documentos/all");
    }
}
