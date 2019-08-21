import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { Document } from './document.model';
import { DataStorageService } from '../shared/data-storage.service';
import { DocumentService } from './document.service';

@Injectable({ providedIn: 'root' })
export class DocumentsResolverService implements Resolve<Document[]> {
  constructor(
    private dataStorageService: DataStorageService,
    private recipesService: DocumentService
  ) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const recipes = this.recipesService.getDocuments();

    if (recipes.length === 0) {
      return this.dataStorageService.fetchDocuments();
    } else {
      return recipes;
    }
  }
}
