

function Skeleton({ times }) {
    const boxes = Array(times).fill(0).map((_, i) => {
        return <div className='skeleton__box' key={i}>
            <div className="skeleton__box skeleton__box--img"></div>
            <div className="skeleton__box skeleton__box--item"></div>
            <div className="skeleton__box skeleton__box--item"></div>
        </div>
    })

    return <div className='skeleton'>
        {boxes}
    </div>
}

export default Skeleton;