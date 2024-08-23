
export default function Button({title,...restProps}) {

    return (
        <div className=' flex justify-center mx-60' >
            <button  {...restProps}  className='bg-blue-300 h-10 w-24 rounded-lg'>{title}</button>
        </div>

    )
}