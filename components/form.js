

const Form = ({ value, handleChange, handleSubmit }) => {



    return (

        <>
            <div className="container" style={{
                'margin-top': '60px'
            }}>
                <div className="row">
                    <div className="col-md-12">
                        <div className="card">
                            <h3 className="heading">Login Aplikasi</h3>
                            <div className="card-body">

                                <form action="" className="form-horizontal" method="POST" onSubmit={handleSubmit}>
                                    <div className="form-group row">
                                        <label className="col-md-2 label">Username</label>
                                        <div className="col-md-3">
                                            <input type={'text'} name="username" className="form-control" onChange={handleChange} value={value.username} required></input>
                                        </div>
                                    </div>
                                    <br />
                                    <div className="form-group row">
                                        <label className="col-md-2">Password</label>
                                        <div className="col-md-3">
                                            <input type={'password'} name="password" className="form-control" onChange={handleChange} value={value.password} required></input>
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <div className="col-md-3">
                                            <button className="btn btn-primary btn-sm" type="submit"><i className="fa fa-save"></i> Login</button>
                                            &nbsp; &nbsp;
                                            <button className="btn btn-warning btn-sm" type="reset"><i className="fa fa-save"></i> Reset</button>
                                        </div>
                                    </div>

                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Form;