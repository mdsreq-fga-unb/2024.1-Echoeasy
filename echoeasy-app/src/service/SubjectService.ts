import { ApiService } from "../api/apiService";

export class SubjectService extends ApiService {
    async getAllSubjectsOfTheDocument(token: string | null, documentId: string) {
        if (!token) {
            throw new Error('No token provided');
          }
        return this.get(`/assuntos/all?document_id=${documentId}`, token);
    }
}
