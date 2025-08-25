import FuzzyText from '../components/FuzzyText/FuzzyText';
import FaultyTerminal from '../components/FaultyTerminal/FaultyTerminal';
import ASCIIText from '../components/ASCIIText';
import { useContext } from "react"
import { AuthContext } from "../context/AuthContext-http-jwt"

const AppPage = () => {

  const { logout, user } = useContext(AuthContext);

  return (
    <div className="bg-black text-white h-[100vh]">


      {user && (
        // <p>Welcome, {user.name}</p>





        <div style={{ width: '100%', height: '100vh', position: 'absolute' }}>
          <FaultyTerminal
            scale={1.5}
            gridMul={[2, 1]}
            digitSize={1.2}
            timeScale={1}
            pause={false}
            scanlineIntensity={1}
            glitchAmount={1}
            flickerAmount={1}
            noiseAmp={1}
            chromaticAberration={0}
            dither={0}
            curvature={0}
            tint="#4e7049"
            mouseReact={true}
            mouseStrength={0.5}
            pageLoadAnimation={false}
            brightness={1}
          />
        </div>
      )}

      <div className='relative flex flex-col h-[100vh] justify-center'>
        {user && (
          // <p>Welcome{user.name}</p>


          <FuzzyText
            baseIntensity={0.2}
            hoverIntensity={0.5}
            enableHover={false}
            fontFamily="Orbitron"
          >
            Welcome, {user.name}
          </FuzzyText>
        )}

        <div className='flex w-full justify-center mt-4'>

          <div className='mr-4'>

            <a href="secret"
              className="inline-block bg-white text-black font-medium px-6 py-2 rounded-full shadow hover:bg-gray-100 transition">
              Secret Key
            </a>
          </div>

          {/* <a href="secret" className="bg-red-500 rounded-3xl ">Acess the secret key</a> */}
          <button className="bg-white cursor-pointer text-black font-medium px-6 py-2 rounded-full shadow" onClick={logout}>
            Logout
          </button>
        </div>

        {/* <button onClick={logout}>Logout</button> */}
      </div>
    </div>
  )
}

export default AppPage
