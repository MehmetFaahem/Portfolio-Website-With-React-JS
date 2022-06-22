import { useState, useEffect } from 'react'
import { supabase } from '../supabaseClient'
import { Button } from '@mui/material'
import Example from './header'
import Skills from './skills'

const Profile = ({ session }) => {
    const [loading, setLoading] = useState(true)
    const [username, setUsername] = useState(null)
    const [website, setWebsite] = useState(null)
    const [avatar_url, setAvatarUrl] = useState(null)

    const Message = () => {
        if (!loading) {
            alert('Your Profile Successfully Updated')
        } else
            return null


    }

    useEffect(() => {
        getProfile()
    }, [session])

    const getProfile = async () => {

        try {
            setLoading(true)
            const user = supabase.auth.user()

            let { data, error, status } = await supabase
                .from('profiles')
                .select(`username, website, avatar_url`)
                .eq('id', user.id)
                .single()

            if (error && status !== 406) {
                throw error
            }

            if (data) {
                setUsername(data.username)
                setWebsite(data.website)
                setAvatarUrl(data.avatar_url)
            }
        } catch (error) {
            alert(error.message)
        } finally {
            setLoading(false)
        }
    }

    const updateProfile = async (e) => {
        e.preventDefault()

        try {
            setLoading(true)
            const user = supabase.auth.user()

            const updates = {
                id: user.id,
                username,
                website,
                avatar_url,
                updated_at: new Date(),
            }

            let { error } = await supabase.from('profiles').upsert(updates, {
                returning: 'minimal', // Don't return the value after inserting
            })

            if (error) {
                throw error
            }
        } catch (error) {
            alert(error.message)
        } finally {
            setLoading(false)
        }
    }

    return (

        <div aria-live="polite">
            {loading ? (
                'Saving ...'
            ) : (
                <form onSubmit={updateProfile} className="form-widget ml-20 mb-10">
                    <div className='mb-15'>
                        <h1 className='self-center text-7xl text-cyan-800 mb-10 font-bold'>Wow, You Are Here !</h1>
                    </div>
                    <div className='text-3xl'>Your Email: {session.user.email}</div>
                    <h2 className='text-3xl mt-8 text-cyan-800 font-bold' >Customize Your Informations</h2>
                    <div className='pr-96'>
                        <div className='mt-5 flex flex-col align-start'>
                            <label htmlFor="username" className='mb-3'>Name</label>
                            <input
                                id="username"
                                type="text"
                                value={username || ''}
                                onChange={(e) => setUsername(e.target.value)}
                                className='p-3 border-2 rounded-lg text-black border-cyan-800'
                                placeholder='Name'
                            />
                        </div>
                    </div>
                    <div className='pr-96'>
                        <div className='mt-5 flex flex-col align-start'>
                            <label htmlFor="website" className='mb-3'>Website</label>
                            <input
                                id="website"
                                type="url"
                                value={website || ''}
                                onChange={(e) => setWebsite(e.target.value)}
                                className='p-3 border-2 rounded-lg text-black border-cyan-800'
                                placeholder='Your Website URL'
                            />
                        </div>
                    </div>
                    <div className='mt-10 mb-52' >
                        <Button variant="contained" disabled={loading} onClick={Message}>Update</Button>
                    </div>
                    <div className='mt-30'>
                        <Button variant="contained" color="error" onClick={() => supabase.auth.signOut()}>
                            Sign Out
                        </Button>
                    </div>
                </form>
            )}

        </div>

    )
}

export default Profile