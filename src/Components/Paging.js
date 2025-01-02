import React from 'react'
import './Listing1.css';
import Dropdown from './Dropdown';

export default function Paging() {
  return (
    <>
      <Dropdown />
      <nav aria-label="Page navigation">
        <ul className="pagination justify-content-center">
          <li className="page-item disabled">
            <a className="page-link" href="#" aria-label="Previous" tabindex="-1">
              <span aria-hidden="true">&laquo;</span>
              <span className="sr-only">Previous</span>
            </a>
          </li>
          <li className="page-item active" aria-current="page">
            <a className="page-link" href="#">1</a>
          </li>
          <li className="page-item"><a className="page-link" href="#">2</a></li>
          <li className="page-item"><a className="page-link" href="#">3</a></li>
          <li className="page-item">
            <a className="page-link" href="#" aria-label="Next">
              <span aria-hidden="true">&raquo;</span>
              <span className="sr-only">Next</span>
            </a>
          </li>
        </ul>
      </nav>

      <div className='footer'>
        <form>
          <div className="form-row align-items-center">
            
            <div className="col-auto">
              <label className="sr-only" htmlFor="inlineFormInputGroup">Username</label>
              <div className="input-group mb-2">
                <div className="input-group-prepend">
                  <div className="input-group-text">@</div>
                </div>
                <input type="text" className="form-control" id="inlineFormInputGroup" placeholder="Username" />
              </div>
            </div>
            <div className="col-auto">
              <div className="form-check mb-2">
                <input className="form-check-input" type="checkbox" id="autoSizingCheck" />
                <label className="form-check-label" htmlFor="autoSizingCheck">
                  Remember me
                </label>
              </div>
            </div>
            <div className="col-auto">
              <button type="submit" className="btn btn-primary mb-2">Submit</button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
