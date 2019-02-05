# Orders App

This is a basic Angular-based SPA for managing something called "Orders".

No special frameworks are used other than the ones that come with Angular.

The app currently has the following functionality:

- Get all orders on the main page
- Refresh all orders
- A non-working order creation form (no connection to backend)

# Goals

- Finish the order creation functionality with tests at least for the Service
- [Optional] Add order update functionality
- [Optional] Anything else that comes to mind

You are time-limited to ~40 minutes. Remaining time will be used to discuss your implementation and challenges.
You are free to use any documentation you might need.

# Service API

## GET /orders

Returns a JSON array of Orders
Example:

```
GET /orders
[
    {id: 0, title: "test", status: "PROCESSING"},
    {id: 1, title: "hello world", status: "IN_TRANSIT"}
]
```

## GET /orders/:id

Path params:

- id (number) [0...MAX_INT]

Returns a single JSON-formatted Order
Example:

```
GET /orders/0
{id: 0, title: "test", status: "PROCESSING"}
```

HTTP Statuses:

- 200 OK
- 404 NOT FOUND
  Error response format: `{error: "This is an error message"}`

## POST /orders

JSON request payload format:

- title (string)
- status (enum)

Create a new Order

Example request payload:

```
POST /orders
{title: "test", status: "PROCESSING"}
```

HTTP Statuses:

- 201 CREATED
- 400 BAD REQUEST
  Error response format: `{error: "This is an error message"}`

## POST /orders:id

Path params:

- id (number) [0...MAX_INT]
  JSON request payload format:
- title (string)
- status (enum)

Update an existing Order

Example request payload:

```
POST /orders/0
{title: "another title", status: "PROCESSING"}
```

HTTP Statuses:

- 200 OK
- 400 BAD REQUEST
- 404 NOT FOUND
  Error response format: `{error: "This is an error message"}`


# Angular Specifics

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.2.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
