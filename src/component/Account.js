import { Link } from "react-router-dom";

function Account() {
  return (
    <div className="Account">
      <div className="row">
        <div className="col-sm-3">
          <div className="left-sidebar">
            <h2>Account</h2>
            <div className="panel-group category-products" id="accordian">                                      
              <div className="panel panel-default">
                <div className="panel-heading">
                  <h4 className="panel-title"><Link to="/Account">Account</Link></h4>
                </div>
              </div>
              <div className="panel panel-default">
                <div className="panel-heading">
                  <h4 className="panel-title"><Link to="/myProduct">My product</Link></h4>
                </div>
              </div>                   
            </div>
          </div>
        </div>
        <div className="col-sm-6" style={{margin: '0 0 30px 100px'}}>
          <div className="blog-post-area">
            <h2 className="title text-center">Update user</h2>
            <div className="signup-form">
              <form action="#" method="POST" encType="multipart/form-data">
                <input type="text" name="name" placeholder="Name" defaultValue="" />
                <input type="email" name="email" placeholder="Email Address" defaultValue="" />
                <input type="password" name="password" placeholder="Password" defaultValue="" />
                <input type="text" name="country" placeholder="Country" defaultValue="" />
                <input type="text" name="phone" placeholder="Phone Number" defaultValue="" />
                <input type="file" name="avatar" defaultValue="" />
                <button type="submit" className="btn btn-default">Update</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Account;
