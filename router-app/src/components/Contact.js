import React from 'react'

const Contact = () => {

    const contact = {
        first: "Your",
        last: "Name",
        twitter: "your_handle",
        notes: "Some notes",
        favorite: true
    };

  return (
    <div>
        <h1>
            {contact.first || contact.last ? 
            ( <>
                {contact.first} {contact.last}
            </>) :
            ( <i>No Name</i>)} {" "}
            <favorite contact={contact} />
        </h1>

        {contact.twitter && (
            <p>
                <a target="_blank" 
                    href={''}></a>
            </p>
        )}
    </div>
  )
}

export default Contact


