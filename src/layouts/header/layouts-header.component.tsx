import { useRouter } from 'next/router';
import React from 'react';

const navigation = [
    { title: 'Home', link: '/' },
    { title: 'Documentation', link: '/documentation' },
    { title: 'Demo', link: '/demo' }
]

export const LayoutsHeader: React.FC = () => {
    const router = useRouter();

    function classNames(...classes: any) {
        return classes.filter(Boolean).join(' ')
    }
    return (
        <nav className="bg-amber-600 py-2 md:py-4">
            <div className="container px-4 mx-auto md:flex md:items-center">

                <div className="flex justify-between items-center">
                    <a onClick={() => router.push('/')} className="font-bold text-xl text-indigo-600 hover:cursor-pointer">TEMPOTA</a>
                    <button className="border border-solid border-gray-600 px-3 py-1 rounded text-gray-600 opacity-50 hover:opacity-75 md:hidden" id="navbar-toggle">
                        <i className="fas fa-bars"></i>
                    </button>
                </div>

                <div className="hidden md:flex flex-col md:flex-row md:ml-auto mt-3 md:mt-0" id="navbar-collapse">
                    {navigation.map((list, index) => (
                        <a
                            id={`id-${index}`}
                            onClick={() => router.push(list.link)}
                            className={classNames(
                                router.asPath === list.link ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white cursor-pointer',
                                'px-3 py-2 rounded-md text-sm font-medium'
                            )}
                        >{list.title}</a>
                    ))}
                </div>
            </div>
        </nav>
    )
}