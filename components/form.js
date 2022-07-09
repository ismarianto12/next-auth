

const Form = ({ value, handleChange, handleSubmit }) => {



    return (

        <>
            <div className="container" style={{
                'margin-top': '60px',


            }}>
                <div className="row">
                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-header" style={{

                                'background': '#1b5bab',
                                'color': '#fff',
                                'text-align': 'center'
                            }}>
                                <h3 className="heading"><b><i className="fa fa-users"></i> Login Aplikasi</b></h3>
                            </div>
                            <div className="card-body" style={{ 'magin-right': '12px' }}>

                                <form action="" className="form-horizontal" method="POST" onSubmit={handleSubmit}>
                                    <div className="form-group row">
                                        <label className="col-md-3 label"><b>Username</b></label>
                                        <div className="col-md-5">
                                            <input type={'text'} name="username" className="form-control" onChange={handleChange} value={value.username} required></input>
                                        </div>
                                    </div>
                                    <br />
                                    <div className="form-group row">
                                        <label className="col-md-3 label"><b>Password</b></label>
                                        <div className="col-md-5">
                                            <input type={'password'} name="password" className="form-control" onChange={handleChange} value={value.password} required></input>
                                        </div>
                                    </div>
                                    <br />
                                    <div className="form-group row">

                                        <div className="col-md-8">
                                            <button className="btn btn-primary btn-md" type="submit"><i className="fa fa-save"></i> Login</button>
                                            &nbsp; &nbsp;
                                            <button className="btn btn-warning btn-md" type="reset"><i className="fa fa-save"></i> Reset</button>
                                        </div>
                                    </div>

                                </form>
                                <br />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                    </div>
                </div>
            </div>

        </>
    )
}

export default Form;