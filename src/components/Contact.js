import React from 'react'

export default class Contact extends React.Component {
  render() {
    return (
      <div>
        <h3 className="major">Instagram Followers Refill</h3> 
        <p>
          <strong>
            {/*
            Removing email for SPAM reasons
             <br />
            <span className="icon alt fa-envelope">&nbsp;</span>
            atsuro4me@yahoo.com
            */}
            
          </strong>
        </p>

        <form
          name="Contact"
          method="POST"
          action="/."
          data-netlify="true"
          data-netlify-honeypot="bot-field"
        >
          <input type="hidden" name="bot-field" />

          <div className="field">
            <label htmlFor="name">Category: </label>
          <select id="Category" name="Category">
            <option value="1">Instagram Followers Refill</option>
            <option value="2">Instagram Comments</option>
            <option value="3">Instagram Likes</option>
            <option value="4">Instagram Views</option>
            <option value="5">Instagram Story Views</option>
            <option value="6">Instagram Real Views/Likes</option>
            <option value="7">Youtube Views</option>
            <option value="8">Youtube Watchtime Services</option>
          </select>
          </div>

          <div className="field">
            <label htmlFor="name">Services: </label>
          <select id="Category" name="Category">
            <option value="1">Instagram Followers [Refill 99 days] [Max: 1mil] [Start Time: 1hr] [Speed: 2k/day] - $0.78</option>
            <option value="2">Instagram Followers [Refill 30 days] [Max: 1mil] [Start Time: 0-1hr] [Speed: 60k/day] - $1.30</option>
            <option value="3">Instagram Followers [Refill 60 days] [Max: 500k] [Start Time: 0-1hr] [Speed: 20k/day] - $2</option>
            <option value="4">Instagram Views</option>
            <option value="5">Instagram Story Views</option>
            <option value="6">Instagram Real Views/Likes</option>
            <option value="7">Youtube Views</option>
            <option value="8">Youtube Watchtime Services</option>
          </select>
          </div>
          
          <div className="field half">
            <label htmlFor="email">Your Account: </label>
            <input type="text" name="email" id="email" />
          </div>
          <div className="field half">
            <label htmlFor="email">Quantity: </label>
            <input type="text" name="email" id="email" />
          </div>
          <ul className="actions">
            <div>
              <input type="submit" value="Send Message" className="special" />
            </div>
            <div>
              <input type="reset" value="Reset" className="special" />
            </div>
          </ul>
        </form>
      </div>
    )
  }
}