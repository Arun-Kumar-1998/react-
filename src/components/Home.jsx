import React from 'react'

const Home = () => {
    return (
        <>
        <div className="add-2-cart">
            <h1 className="plus">➕</h1> 
        </div>
           <h1>home components</h1> 
        <div>
            <div className="low--dark">
                <img  className="img"src="https://i.picsum.photos/id/151/200/300.jpg?hmac=xUZfjy1YzUhANZsaGjxLKdz9qmhZYsYGpEoht7SCyng" alt="" />
            </div>
            <div className="text-wrapper-item">
                <span className="meta">
                    nature
                </span>
                <span className="meta">
                    ticket:$100.33
                </span>

            </div>
            <div className="btn-wrapper-item">
                <button>
                    Add to cart
                </button>

            </div>

        </div>

        </>
    )
}

export default Home
