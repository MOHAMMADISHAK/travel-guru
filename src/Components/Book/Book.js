import React from 'react';
import { useHistory, useParams } from 'react-router-dom';
import './Book.css'

const Book = () => {
    const history = useHistory();
    const handleBook = (title) => {
        history.push(`/catalogue/${title}`);
    }
    const {title} = useParams();
    return (
        <div className="row grid-style">
    <div className="col-md-6">
    <h1>{title}</h1>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil ea nesciunt, beatae ut optio aliquid itaque harum, molestiae commodi accusantium eligendi. Blanditiis eos tempore placeat aspernatur pariatur vero perspiciatis debitis quia magnam officia ducimus nostrum sapiente totam quod voluptatibus voluptatem sed, neque maxime aut sequi. Cupiditate pariatur ullam deserunt quasi quisquam dicta consequuntur soluta eius sint quas id, esse reiciendis non voluptas, facere debitis! Soluta, necessitatibus. Necessitatibus cumque optio itaque, tempore facilis reiciendis nemo beatae pariatur ex distinctio, eaque excepturi mollitia quibusdam vero natus explicabo eos asperiores illo ipsam est soluta dicta sunt. Ipsam temporibus odio quae fugiat numquam deleniti.</p>
    </div>
    <div className="col-md-6">
    <div className="form-style">
    <form >
       <div className="form-group from-group-style">
       <label className="form-title-1" for="origin">Origin</label>
        <input type="text" defaultValue="Dhaka" className="form-control form-control-style"   placeholder="Origin" required/>
        </div>
        <div className="form-group">
        <label className="form-title-2" for="destination">Destination</label>   
        <input type="text" className="form-control form-control-style" defaultValue={title} placeholder="Destination" required/>
        </div>
        <div className="form-group">
        <label className="form-title-3" for="from">From</label>   
        <input type="text" className="form-control form-control-style"  placeholder="dd/mm/yy" required/>
        </div>
        <div className="form-group">
        <label className="form-title-4" for="to">To</label>   
        <input type="text" className="form-control form-control-style"  placeholder="dd/mm/yy" required/>
        </div>
        <button type="button" onClick={() => handleBook(title)}  className="btn btn-warning button-style">Start Booking</button>
      </form>
      </div>
    </div>
    
  </div>
    );
};

export default Book;