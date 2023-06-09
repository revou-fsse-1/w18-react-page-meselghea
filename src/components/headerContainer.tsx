
import LikesPhotoCounter from "./likedPhotosCounter";
function Header() {
    return (
<div className="flex flex-col items-center justify-center">

    <h1 className="mt-4 text-3xl font-bold text-white">
    Photo Club Gallery
    </h1>
    < LikesPhotoCounter count={0}/>
</div>
)
}
export default Header;