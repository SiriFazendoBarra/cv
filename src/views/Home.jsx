import { BsGithub, BsLinkedin, BsFillPhoneFill } from 'react-icons/bs'
import { GrMail } from 'react-icons/gr'
import Certifications from '../components/Certifications'
import Experience from '../components/Experience'
import Education from '../components/Education'
import { useDataContext } from '../context/DataContext'

export default function Home() {

    const { data } = useDataContext()

    return (
        <div className="home container text-light text-shadow-dark-soft p-0">

            <div className="border-box-app p-3 py-4 rounded d-flex flex-wrap gap-3 gap-md-0 justify-content-evenly">
                <p className="h1 col-12 text-center mb-4">Perfil Profesional</p>
                <div className="d-flex flex-column border-box-sof rounded col-12 col-md-4 px-3">
                    <div className="d-flex flex-wrap gap-3 article">
                        <div className="border-box-ap rounded" >
                            <img className="col-12 img-fluid rounded selfi filterPic " id="pic" src="https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/styles/hc_480x270/public/media/image/2013/03/213083-starcraft-2-wings-liberty-mitad-precio.jpg?itok=CBUz1E-j" alt="" />
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
                    <div className="col-12 article" name="experience">
                        <Experience />
                    </div>
                    <div className="col-12 article" name="education">
                        <Education />
                    </div>
                    <div className="col-12 article" name="certifications">
                        <Certifications />
                    </div>
                    <div className="col-12 article div" name="">
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse quaerat iste sed itaque iusto tempore voluptates fuga hic tenetur culpa obcaecati quos quasi accusamus numquam reprehenderit, accusantium perspiciatis maiores. Neque.</p>
                    </div>
                    {/* <iframe src="https://www.youtube.com/embed/UN6wWphtRpk" title="Awakening - [Short Cinematic Soundtracks] - 30 seconds Epic Uplifting Music" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
                    {/* <audio className='opacity-50' autoPlay="true" controls="true" loop="true" src="/btheme.mp3"></audio> */}
                </div>
            </div>
        </div >


    )
}