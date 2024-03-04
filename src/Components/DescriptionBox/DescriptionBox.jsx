import React from 'react';
import "./DescriptionBox.css";

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>

        <div className="descriptionbox-navigator">
            <div className="descriptionbox-nav-box">
                Description
            </div>
            <div className="descriptionbox-nav-box fade">
                Reviews (122)
            </div>
        </div>

        <div className="descriptionbox-description">
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus eius rerum atque ab, modi ipsum ea, ratione molestiae delectus quidem sit itaque, quod natus. Nostrum possimus, repellat quod optio id similique iure illo totam pariatur dolor ut quasi voluptate accusantium fugit veritatis in repudiandae qui accusamus quam! Reprehenderit quo perferendis placeat doloribus excepturi natus eveniet. Repellendus similique natus omnis? Quos ducimus sapiente ullam culpa error cum possimus temporibus totam voluptas.
            </p>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi excepturi ullam molestiae ex facilis, eius magnam explicabo, magni aspernatur aliquam sequi mollitia ducimus, vero dolorum! Sed esse aut similique suscipit.
            </p>
        </div>

    </div>
  )
}

export default DescriptionBox