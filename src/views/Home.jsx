import { useEffect, useState } from 'react'

import { BsGithub, BsLinkedin, BsFillPhoneFill } from 'react-icons/bs'
import { GrMail } from 'react-icons/gr'

export default function Home() {

    const [data, setData] = useState([])
    const getData = async () => {
        const res = await fetch('/data.json')
        const data = await res.json()
        setData(data)
    }

    useEffect(() => {
        getData()
    }, [])


    return (
        <div className="home container text-light text-shadow-dark-soft">

            <div className="border-box-app p-3 py-4 rounded d-flex flex-wrap gap-3 gap-md-0 justify-content-evenly">
                <p className="h1 col-12 text-center mb-4">Perfil Profesional</p>
                <div className="d-flex flex-wrap border-box-sof rounded col-12 col-md-4 px-3">
                    <div className="d-flex flex-wrap gap-3 article">
                        <div className="border-box-ap rounded" >
                            <img className="col-12 img-fluid rounded selfi " id="pic" src="https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/styles/hc_480x270/public/media/image/2013/03/213083-starcraft-2-wings-liberty-mitad-precio.jpg?itok=CBUz1E-j" alt="" />
                        </div>

                        <p className="h2 col-12"> {data.name}</p>
                        <div className="col-12">
                            <p className="h4">Contacto</p>
                            <div className='d-flex justify-content-between align-items-center'>
                                <p className='m-0'>teléfono: +{data.phone}</p>
                                <BsFillPhoneFill className='col-1' />
                            </div>
                            <div className='d-flex justify-content-between align-items-center'>
                                <p className='m-0'>correo: {data.email}</p>
                                <GrMail className='col-1' />
                            </div>
                            <div className='d-flex justify-content-center gap-3 fs-2'>
                                <a href="https://github.com/SiriFazendoBarra" target="_blank" className=''><BsGithub role="butto" /></a>
                                <a href="https://www.linkedin.com/in/manuelperezdearce/" target="_blank"><BsLinkedin /></a>
                            </div>
                        </div>
                    </div>
                    <div className="article">
                        <p className="h4">Información Personal</p>
                        <p>
                            {data.personalInfo}
                        </p>

                    </div>
                    <div className="article">
                        <p className="h4">Objetivos</p>
                        <p>
                            {data.objectives}
                        </p>

                    </div>
                    <div className="article">
                        <p className="h4">Habilidades tecnológicas</p>
                        <p>
                            {data.techSkills}
                        </p>

                    </div>
                    <div className="article">
                        <p className="h4">Intereses</p>
                        <p>{data.interest}</p>

                    </div>

                </div>
                <div className="d-flex flex-column border-box-sof rounded col-12 col-md-8 gap-3 px-3">

                    <div className="col-12 article">
                        <p className="h4">Experiencia</p>
                        {
                            data.workExperience ?

                                data.workExperience.map((item) => {
                                    return (
                                        <div className='my-4 ms-4 experience-article' key={item.id} >
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
                    <div className="col-12 article">
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

                    </div>
                    <div className="col-12 article">
                        <p className="h4">Certificaciones</p>
                        <div className='d-flex flex-wrap justify-content-start py-3'>
                            {
                                data.certifications ?
                                    data.certifications.map((item) => {
                                        return (
                                            <a key={item.id} href={item.link} target="_blank" className='col-3 card bg-transparent text-center my-2 border-0'>
                                                {/* <div key={item.id} className='col-4 card bg-transparent text-center my-2 border-0' role="button"> */}
                                                <img className='img-fluid w-50 m-auto' src={item.logo} alt={item.grade} />
                                                <div className='card-body'>
                                                    <p className='card-title'>{item.grade}</p>
                                                    <p className='card-text'>{item.institution}</p>
                                                    <p className='card-text'>{item.duration}</p>
                                                </div>
                                                {/* </div> */}
                                            </a>

                                        )


                                    })
                                    : null
                            }

                        </div>

                    </div>

                </div>
            </div>
        </div >


    )
}