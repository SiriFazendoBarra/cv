import { useDataContext } from "../context/DataContext"


export default function Certificacions() {

    const { data } = useDataContext()

    return (
        <>
            <p className="h4 text-shadow-animated">Certificaciones</p>
            <div className='d-flex flex-wrap justify-content-evenly py-3'>
                {
                    data.certifications ?
                        data.certifications.map((item) => {
                            return (
                                <a key={item.id} href={item.link} target="_blank" className='col-3 card bg-transparent text-center my-2 border-0'>
                                    <img className='img-fluid w-50 m-auto' src={item.logo} alt={item.grade} />
                                    <div className='card-body'>
                                        <p className='card-title'>{item.grade}</p>
                                        <p className='card-text'>{item.institution}</p>
                                        <p className='card-text'>{item.duration}</p>
                                    </div>
                                </a>

                            )
                        })
                        : null
                }

            </div>
        </>
    )
}