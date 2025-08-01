import { Popover, Transition } from '@headlessui/react'
import { Bars3Icon } from '@heroicons/react/20/solid'
import { Link } from 'react-router-dom'
import { Fragment } from 'react/jsx-runtime'

export default function NavMenu() {

    const logout = () => {
        console.log('salir de la cuenta');
        
    }

    return (
        <Popover className="relative">
            <div className='flex items-center gap-2'>
                <div className="text-white uppercase font-bold mx-4 ">chucho kun</div>
                <Popover.Button className="inline-flex items-center gap-x-1 text-sm font-semibold leading-6 rounded-4xl bg-orange-800 p-2 cursor-pointer hover:bg-orange-700">
                    <Bars3Icon className='w-8 h-8 text-white' />
                </Popover.Button>
            </div>
            <Transition
                as={Fragment}
                enter="transition ease-out duration-200"
                enterFrom="opacity-0 translate-y-1"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 translate-y-1"
            >
                <Popover.Panel className="absolute left-1/2 z-10 mt-5 flex w-screen lg:max-w-min -translate-x-1/2 lg:-translate-x-48">
                    <div className="w-full lg:w-56 shrink rounded-xl bg-gray-700 p-4 text-sm font-semibold leading-6 text-white shadow-lg ring-1 ring-gray-900/5">
                        <p className='text-center'>Hola: xxx</p>
                        <Link
                            to='/profile'
                            className='block p-2 cursor-pointer hover:bg-gray-800'
                        >Mi Perfil</Link>
                        <Link
                            to='/'
                            className='block p-2 cursor-pointer hover:bg-gray-800'
                        >Mis Proyectos</Link>
                        <button
                            className='block p-2 cursor-pointer hover:bg-gray-800 w-full text-left'
                            type='button'
                            onClick={logout}
                        >
                            Cerrar Sesión
                        </button>
                    </div>
                </Popover.Panel>
            </Transition>
        </Popover>
    )
}
