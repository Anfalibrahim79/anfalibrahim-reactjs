import React from 'react'

const ContactForm = () => {
  return (
    <div>
                <div className="container-fluid contact" id="contact">
                    <h3 className="fw-bold text-center p-2 mb-4">Contact</h3>
                    <div className="card mx-auto bg-black text-white" style={{ width: "50%" }}>
                        <div className="card-body">
                        <div className="mb-3">
                            <label htmlFor="exampleFormControlInput1" className="form-label">
                            Email address
                            </label>
                            <input
                            type="email"
                            className="form-control"
                            id="exampleFormControlInput1"
                            placeholder="name@example.com"
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleFormControlTextarea1" className="form-label">
                            Message
                            </label>
                            <textarea
                            className="form-control"
                            id="exampleFormControlTextarea1 "
                            rows={3}
                            placeholder="Write the message"
                            defaultValue={""}
                            />
                        </div>
                        <div className="d-grid gap-2">
                            <button type="button" className="btn btn-primary">
                            Send
                            </button>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
  )
}

export default ContactForm