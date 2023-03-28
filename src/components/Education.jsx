import { useDataContext } from "../context/DataContext"


export default function Education() {

    const { data } = useDataContext()

    return (
        <>
            <p className="h4">Educación</p>
            {
                data.education ?
                    data.education.reverse().map((item) => {
                        return (
                            <div className='my-4 ms-4 experience-article' key={item.id} >
                                <hr />
                                <p className='h3'>{item.grade}</p>
                                <p className="m-0">{item.institution}</p>
                                <p>{item.duration}</p>
                                {/* <p>{item.description}</p> */}
                            </div>
                        )
                    })
                    : null
            }
        </>
    )
}