import {Injectable, Injector, ReflectiveInjector} from '@angular/core';
import 'rxjs/Rx';

@Injectable()
export class MockService {
  getReferenceDescriptor(){
    return [
      {
        "id": 1,
        "name": "books.Book",
        "verbose_name": "Book",
        "url": "/business-logic/rest/reference/list/books.Book",
        "search_fields": "",
        "content_type": 38
      },
      {
        "id": 2,
        "name": "books.Author",
        "verbose_name": "Author",
        "url": "/business-logic/rest/reference/list/books.Author",
        "search_fields": "",
        "content_type": 36
      },
      {
        "id": 3,
        "name": "books.Publisher",
        "verbose_name": "Publisher",
        "url": "/business-logic/rest/reference/list/books.Publisher",
        "search_fields": "",
        "content_type": 37
      }
    ];
  }
}
