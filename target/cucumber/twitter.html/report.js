$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("get_book_by_isbn.feature");
formatter.feature({
  "line": 1,
  "name": "Get book by ISBN",
  "description": "",
  "id": "get-book-by-isbn",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 2,
  "name": "User calls web service to get a book by its ISBN",
  "description": "",
  "id": "get-book-by-isbn;user-calls-web-service-to-get-a-book-by-its-isbn",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 3,
  "name": "a book exists with an isbn of 9781451648546",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "a user retrieves the book by isbn",
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "the status code is 200",
  "keyword": "Then "
});
formatter.step({
  "line": 6,
  "name": "response includes the following",
  "rows": [
    {
      "cells": [
        "totalItems",
        "1"
      ],
      "line": 7
    },
    {
      "cells": [
        "kind",
        "books#volumes"
      ],
      "line": 8
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "response includes the following in any order",
  "rows": [
    {
      "cells": [
        "items.volumeInfo.title",
        "Steve Jobs"
      ],
      "line": 10
    },
    {
      "cells": [
        "items.volumeInfo.publisher",
        "Simon and Schuster"
      ],
      "line": 11
    },
    {
      "cells": [
        "items.volumeInfo.pageCount",
        "630"
      ],
      "line": 12
    }
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "9781451648546",
      "offset": 30
    }
  ],
  "location": "GetBooks.aBookExistsWithAnIsbnOf(String)"
});
formatter.result({
  "duration": 2094291634,
  "status": "passed"
});
formatter.match({
  "location": "GetBooks.aUserRetrievesTheBookByIsbn()"
});
formatter.result({
  "duration": 3866585951,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 19
    }
  ],
  "location": "GetBooks.theStatusCodeIs(int)"
});
formatter.result({
  "duration": 124770589,
  "status": "passed"
});
formatter.match({
  "location": "GetBooks.responseIncludesTheFollowing(String,String\u003e)"
});
formatter.result({
  "duration": 998173455,
  "status": "passed"
});
formatter.match({
  "location": "GetBooks.responseIncludesTheFollowingInAnyOrder(String,String\u003e)"
});
formatter.result({
  "duration": 57353385,
  "status": "passed"
});
formatter.uri("get_books_by_author.feature");
formatter.feature({
  "line": 1,
  "name": "Get Book By Author",
  "description": "",
  "id": "get-book-by-author",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 2,
  "name": "User calls web service to get books by single author",
  "description": "",
  "id": "get-book-by-author;user-calls-web-service-to-get-books-by-single-author",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 3,
  "name": "Author \"Stephen King\" exists",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "A user retrieves his books",
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "the status code is 200",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Stephen King",
      "offset": 8
    }
  ],
  "location": "GetBooks.authorExists(String)"
});
formatter.result({
  "duration": 2165726,
  "status": "passed"
});
formatter.match({
  "location": "GetBooks.aUserRetrievesHisBooks()"
});
formatter.result({
  "duration": 795622391,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 19
    }
  ],
  "location": "GetBooks.theStatusCodeIs(int)"
});
formatter.result({
  "duration": 785926,
  "status": "passed"
});
});