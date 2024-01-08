import React from 'react'
import { useRoutes } from 'react-router-dom'

import { Homepage } from '../screens/homepage/homepage'
import { Profile } from '../screens/profile/profile'
import { TugasDanFungsi } from '../screens/profile/tugasDanFungsi/tugasDanFungsi'
import { Struktur } from '../screens/profile/struktur/struktur'
import { WilayahKerja } from '../screens/profile/wilayahKerja/wilayahKerja'

export const Route = () => {
    const routes = [
        {
            path: "/",
            element: <Homepage />,
        },
        {
            path: "/profile",
            element: <Profile />,
        },
        {
            path: "/profile/tugas-dan-fungsi",
            element: <TugasDanFungsi />,
        },
        {
            path: "/profile/struktur",
            element: <Struktur />,
        },
        {
            path: "/profile/wilayah-kerja",
            element: <WilayahKerja />,
        },
    ];

    const element = useRoutes(routes);

    return element;
}
