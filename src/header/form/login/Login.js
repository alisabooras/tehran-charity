import React from 'react'
import './Login.css'

function Login() {

    function handleSubmit(e) {
        e.preventDefault()
    }

    return (
        <>
            <button type="button" className="login btn btn-light mx-3" data-bs-toggle="modal" data-bs-target="#modalLogin">
                ورود
            </button>

            <div className="modal fade" id="modalLogin" tabIndex="-1" aria-hidden="true" dir="rtl">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header modal-2">
                            <button data-bs-dismiss="modal" type="button" className="btn-close mb-1" aria-label="Close"></button>
                            <h5 className="text-warning mt-1"><i className="fas fa-sign-in-alt"></i> ورود به حساب</h5>
                        </div>
                        <div className="modal-body">
                            <form onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <label className="form-label" htmlFor="user">ایمیل خود را وارد کنید</label>
                                    <input dir="ltr" type="email" className="form-control" id="user" name="user" placeholder="...@gmail.com" required />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label" htmlFor="pass">پسورد خود را وارد کنید</label>
                                    <input dir="ltr" type="password" className="form-control" id="pass" name="password" placeholder="" required/>
                                </div>
                                <div className="mb-3 form-check">
                                    <input type="checkbox" className="form-check-input" id="rememberMe" />
                                    <label className="form-check-label"  htmlFor="rememberMe">ذخیره مشخصات</label>
                                </div>
                                <div className="modal-footer">
                                    <button type="submit" className="btn btn-warning">ورود</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login
