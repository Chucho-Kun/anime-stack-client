import portada from "../../assets/covers/1.png"
import { useForm } from "react-hook-form"
import ErrorMessage from "../../components/ErrorMessage"
import type { AnimeFormData } from "../../types"
import { addAnimeAPI } from "../../api/AnimeAPI"
import { toast } from "react-toastify"
import { useMutation } from "@tanstack/react-query"

export default function AddAnimeForm() {

    const defaultValues : AnimeFormData = {
        animeName: "",
        animeReview: "",
        animeGender: "",
        animeStudio: "",
        animeDate: "",
        animeImg: portada
    }
    const { reset , register , handleSubmit , formState:{errors}} = useForm({ defaultValues })

    const { mutate } = useMutation({
        mutationFn:addAnimeAPI,
        onSuccess: data => {
            toast.success(data)
            reset()
        },
        onError: (err) => {
            toast.error(err.message)
        }
        
    })

    const handleForm = ( data : AnimeFormData) => mutate(data)

    return (
        
            <form
                className="mt-10 bg-white shadow-lg p-10 rounded-lg"
                onSubmit={ handleSubmit(handleForm)}
                noValidate
            >

                <div className="mb-5 space-y-3">
                <label htmlFor="animeName" className="text-sm uppercase font-bold">
                    Nombre del Anime
                </label>
                <input
                    id="animeName"
                    className="w-full p-3  border border-gray-200"
                    type="text"
                    placeholder="Nombre del Anime"
                    {...register("animeName", {
                        required: "El Titulo del Proyecto es obligatorio",
                    })}
                />

                {errors.animeName && (
                    <ErrorMessage>{errors.animeName.message}</ErrorMessage>
                )}
            </div>

            <div className="mb-5 space-y-3">
                <label htmlFor="animeGender" className="text-sm uppercase font-bold">
                    Género del Anime
                </label>
                <input
                    id="animeGender"
                    className="w-full p-3  border border-gray-200"
                    type="text"
                    placeholder="Géneros del Anime"
                    {...register("animeGender", {
                        required: "El Género del Anime es obligatorio",
                    })}
                />

                {errors.animeGender && (
                    <ErrorMessage>{errors.animeGender.message}</ErrorMessage>
                )}
            </div>

            <div className="mb-5 space-y-3">
                <label htmlFor="animeStudio" className="text-sm uppercase font-bold">
                    Estudio del Anime
                </label>
                <input
                    id="animeStudio"
                    className="w-full p-3  border border-gray-200"
                    type="text"
                    placeholder="Estudio del Anime"
                    {...register("animeStudio", {
                        required: "El Estudio del Anime es obligatorio",
                    })}
                />

                {errors.animeStudio && (
                    <ErrorMessage>{errors.animeStudio.message}</ErrorMessage>
                )}
            </div>

            <div className="mb-5 space-y-3">
                <label htmlFor="animeDate" className="text-sm uppercase font-bold">
                    Fecha del Anime
                </label>
                <input
                    id="animeDate"
                    className="w-full p-3  border border-gray-200"
                    type="text"
                    placeholder="Fecha de lanzamiento"
                    {...register("animeDate", {
                        required: "La fecha de lanzamiento es obligatorio",
                    })}
                />

                {errors.animeDate && (
                    <ErrorMessage>{errors.animeDate.message}</ErrorMessage>
                )}
            </div>

            <div className="mb-5 space-y-3">
                <label htmlFor="animeReview" className="text-sm uppercase font-bold">
                    Reseña
                </label>
                <textarea
                    id="animeReview"
                    className="w-full p-3  border border-gray-200"
                    placeholder="Reseña del Anime"
                    {...register("animeReview", {
                        required: "Una descripción del anime es obligatoria"
                    })}
                />

                {errors.animeReview && (
                    <ErrorMessage>{errors.animeReview.message}</ErrorMessage>
                )}
            </div>

                <input
                    type="submit" value='Agregar Anime'
                    className="bg-fuchsia-600 hover:bg-fuchsia-700 w-full p-3 text-white uppercase font-bold cursor-pointer transition-colors"
                />
            </form>
            
        
    )
}