export const STYLES:string = `/* Add application styles & imports to this file! */
input.ng-invalid{
    background-color:#DA5235;
    color:white;
  }

 select.ng-invalid{
    background-color:#DA5235;
    color:white;
  }
  
  .fade.show {
    opacity: 1;
}
.invalid-feedback {
  display: none;
  width: 100%;
  margin-top: .25rem;
  font-size: 80%;
  color: #dc3545;
}
.form-control.is-invalid~.invalid-feedback, .form-control.is-invalid~.invalid-tooltip, .was-validated .form-control:invalid~.invalid-feedback, .was-validated .form-control:invalid~.invalid-tooltip {
  display: block;
}
.form-control.is-invalid, .was-validated .form-control:invalid {
  border-color: #dc3545!important;
  padding-right: calc(1.5em + .75rem);
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='%23dc3545' viewBox='-2 -2 7 7'%3e%3cpath stroke='%23dc3545' d='M0 0l3 3m0-3L0 3'/%3e%3ccircle r='.5'/%3e%3ccircle cx='3' r='.5'/%3e%3ccircle cy='3' r='.5'/%3e%3ccircle cx='3' cy='3' r='.5'/%3e%3c/svg%3E");
  background-repeat: no-repeat;
  background-position: center right calc(.375em + .1875rem);
  background-size: calc(.75em + .375rem) calc(.75em + .375rem);
}

.invalid-feedback {
  display: none;
  width: 100%;
  margin-top: .25rem;
  font-size: 80%;
  color: #dc3545;
}
.form-control.is-invalid~.invalid-feedback, .form-control.is-invalid~.invalid-tooltip, .was-validated .form-control:invalid~.invalid-feedback, .was-validated .form-control:invalid~.invalid-tooltip {
  display: block;
}
.form-control.is-invalid, .was-validated .form-control:invalid {
  border-color: #dc3545!important;
  padding-right: calc(1.5em + .75rem);
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='%23dc3545' viewBox='-2 -2 7 7'%3e%3cpath stroke='%23dc3545' d='M0 0l3 3m0-3L0 3'/%3e%3ccircle r='.5'/%3e%3ccircle cx='3' r='.5'/%3e%3ccircle cy='3' r='.5'/%3e%3ccircle cx='3' cy='3' r='.5'/%3e%3c/svg%3E");
  background-repeat: no-repeat;
  background-position: center right calc(.375em + .1875rem);
  background-size: calc(.75em + .375rem) calc(.75em + .375rem);
}

.mr-sm-2, .mx-sm-2 {
  margin: .5rem!important;
}
.mb-2, .my-2 {
  margin: .5rem!important;
}

.form-row {
  margin: 0px;
}

@media (min-width: 576px) {
  .form-inline .form-check {
    padding-left: 0.5rem!important;
  }
}

.form-control-sm {
  padding-left: 15px!important;
}


`
