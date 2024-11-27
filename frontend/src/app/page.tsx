import { useEffect } from 'react'
import { useNavigation } from 'react-day-picker'

import Image from 'next/image'
import { redirect } from 'next/navigation'
import { useRouter } from 'next/router'

export default function Home() {
	redirect('/i')
}
