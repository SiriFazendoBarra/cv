import { useDataContext } from "../context/DataContext"


export default function Experience() {

    const { data } = useDataContext()

    return (
        <>
            <p className="h4 text-shadow-animated">Experiencia</p>
            <div className='d-flex flex-wrap justify-content-evenly py-3'>
                {
                    data.workExperience ?
                        data.workExperience.reverse().map((item) => {
                            return (
                                <div className='my-0 ms-4 experience-article' key={item.id} >
                                    <hr />
                                    <p className='h3'>{item.title}</p>
                                    <p className="h5 m-0">{item.company}</p>
                                    <p>{item.duration}</p>
                                    <p>{item.description}</p>
                                </div>

                            )
                        })
                        : null
                }

            </div>
        </>
    )
}