
/** Photo
 * 
 * Presentational component: shows photo as link to editor
 * 
 * Props: 
 * - photo : {id, url, make, model, date}
 * 
 * State: none
 * 
 * PhotoList --> Photo
 */

//TODO: need description field

function Photo ({ photo }) {
    const {id, url, make, model, date, description} = photo;

    return (
        <div className="Photo">
            <Link to={`/edit/${id}`}>
                <img 
                className="Photo-image" 
                src={url}
                alt={description}
                />
            </Link>
        </div>
    )
}