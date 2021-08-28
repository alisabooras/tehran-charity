import './Signup.css'

function Signup() {

    function handleSubmit(e) {
        e.preventDefault()
    }

    return (
        <>
            <button className="signup btn btn-light" data-bs-toggle="modal" data-bs-target="#login">ثبت نام</button>

            <div className="modal fade" id="login" tabindex="-1" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                             <h5 class="modal-title text-success"><i class="fas fa-user-plus"></i> ثبت نام</h5>
                             <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body" dir="rtl">
                        <form onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <label className="form-label" htmlFor="fname">نام</label>
                                    <input dir="rtl" type="name" className="form-control" id="fname" name="fname" autoComplete required />
                                <div className="mb-3">
                                    <label className="form-label" htmlFor="lname">نام خانوادگی</label>
                                    <input dir="rtl" type="name" className="form-control" id="lname" name="lname" autoComplete required />
                                </div>
                                    
                                </div>
                                <div className="mb-3">
                                    <label className="form-label" htmlFor="email">ایمیل خود را وارد کنید</label>
                                    <input dir="ltr" type="email" className="form-control" id="email" name="email" placeholder="...@gmail.com" autoComplete required />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label" htmlFor="password">رمز عبور</label>
                                    <input dir="ltr" type="password" className="form-control" id="password" name="password" autoComplete required />
                                </div>
                                
                                <div className="modal-footer">
                                    <button type="submit" className="btn btn-success">تایید</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Signup
