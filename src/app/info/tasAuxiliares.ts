/*
Autor: Pani
*/



export const DIRECCIONES = [
    [0, 'DNSISa', 'Dirección Nacional de Sistemas de Información Sanitaria'],
    [1, 'DIIS', 'Dirección de Integración de la Información Sanitaria'],
    [2, 'DIEYD', 'Dirección de Interoperabilidad, Estándares y Desarrollo']
]

export const DIRECCION_FUNCIONES = [
    // 0    
    'Director Nacional', 
    'Director de línea', 
    'Responsable de area', 
    'Analista funcional', 
    'Control de calidad', 
    // 5    
    'Contenidos', 
    'Diseño multimedial', 
    // 7    
    'Evaluación y monitoreo', 
    // 8    
    'Programador FrontEnd', 
    'Programador BackEnd', 
    'DBA', 
    'Dev Ops',
    // 12    
    'activista floral', 
    'bibliotecario'
// 0    
]




export const EQUIPO = [
    [
        0,
        'Emilio Jorge',
        'Panizza',
        2,
        [6, 8],
        'Desarrollador FrontEnd / BackEnd amatute / Amo y señor de esta aplicacion',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRl5pLRnAEIHlJrjSPbrylFi0iwTmFaw8GWwpNKNgfltp67zwTqxg&s',
        true
    ], [
        1,
        'Osmar Ain',
        'Flores',
        2,
        [8, 9],
        'Programador java / desarrollador fullStack / impresentable',
        'https://scontent.faep9-1.fna.fbcdn.net/v/t1.0-9/55782385_396025611181369_9137422083335127040_n.jpg?_nc_cat=102&_nc_sid=8bfeb9&_nc_ohc=Ida9JS_HLZwAX94uE7D&_nc_ht=scontent.faep9-1.fna&oh=0cd14033636a077a79408c06c22dfe0f&oe=5F455725',
        true
    ], [
        2,
        'Pedro',
        'Pereyra',
        2,
        [9, 10, 11, 12],
        'IT man / activista floral',
        'https://depor.com/resizer/GRIWk8BdS-0qW9f6IzgfsBxWZ20=/580x330/smart/arc-anglerfish-arc2-prod-elcomercio.s3.amazonaws.com/public/Z7B7S4BVSZFJFPCI5Z4TZI7GQM.jpg',
        true
    ], [
        3,
        'Federico',
        'Castillo',
        2,
        [8],
        'Progamador PL / desarrolllador de toda cosa programable / Trotamundos',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTt7sGnL_yaYmdSdaDtI2tnXNnC1_3o4Ny7-PHLGgkMUnBepmWc&s',
        true
    ], [
        4,
        'Bruno Monti',
        'Lorusso',
        1,
        [3, 12],
        'Referente web services / cineasta, cinefilo, avenger',
        'data:image/jpeg;base64,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',
        true
    ], [
        5,
        'Osmar Ain',
        'Flores',
        0,
        [0],
        'Director nacional supremo kaiosama full HD',
        'https://scontent.faep9-1.fna.fbcdn.net/v/t1.0-9/55782385_396025611181369_9137422083335127040_n.jpg?_nc_cat=102&_nc_sid=8bfeb9&_nc_ohc=Ida9JS_HLZwAX94uE7D&_nc_ht=scontent.faep9-1.fna&oh=0cd14033636a077a79408c06c22dfe0f&oe=5F455725',
        true
    ], [
        6,
        'María Alejandra',
        'Roses',
        1,
        [1, 2],
        'Directora de la DIRECCIÓN DE INTEGRACIÓN DE LA INFORMACIÓN SANITARIA',
        'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMSEhUTEhMVFRUVGBUWFRUVFxUVFRUVFxUWFhUVFxcYHSggGBolHRUVITEhJSkrLi4uFx8zODMsNygtLisBCgoKDg0OGhAQGi0dHSUtLS0tLS0rLS0rKy0tLS0tLS0tLS0rLS0tLS0tLS0rLS0tLSstLS0tNzctLTc3LTcrLf/AABEIAKgBLAMBIgACEQEDEQH/xAAcAAACAgMBAQAAAAAAAAAAAAAEBQMGAAECBwj/xAA8EAABAwIEBAQDBwMDBAMAAAABAAIDBBEFEiExBkFRYRMicYEHMpEjQmKhscHwFFLhJJLRcoKi8RUzQ//EABkBAAMBAQEAAAAAAAAAAAAAAAECAwQABf/EACQRAAICAgMAAQQDAAAAAAAAAAABAhEDIRIxQVEEEyJhMnGh/9oADAMBAAIRAxEAPwDz/HJGCNmR2jQBblsqvPMXHVG4kCdUuU0jbkyNqkNaSf7LL3VkwCtDG7qrYTSvlu1gJKfz4HKxulwbKbTsFqjjiHHCTZqSsxmVuzkLVRuaTm3QxKdRQJOhycacRqdVx/8AKu5pPddAruCFWQLkqr8lp9USLFCkrQKPFHcyRdBcArLrqGTRJmXWbZRXW47koUMpF24eddmqZy0wKXYBHljF01LtFpwxXHZlyv8ALQuqYsqBr7ZCD0TWuF2myp+IYidWkFdKkxEJCtLFimcYthdQxFxsBcp7SYGALv17INpDKLYgcsTLGIGNIDRbqloXJ2jpKmdMUwYuWKVI2accFWyKRqisp3lH4cGvYWO5bJok8sVehYwrrTmtyNAJA2XKBy6OZGjko12VoNJTEmt6OVilNO7ooyF1gcWuzS2tImGkc7UDRc3QYqyFpXYKklpi1SU2HyyC8cUjwDYlrHOF97XA31H1S2mVSaC5NdE0gwONzQXXB5oKiizPaFZpcZpYiGyNcbb2U5t1ooMcC8GlZ9m3MebiuqnGmuJuAuIMbw2UZbviPUoGv4dN88EjZWb2B1Ufu/Og8QPEaJsxysb5jv2Smr4YcG3afZWCixFsUmoym1rHRM6mojyXHNWjIRo83OFSXtZQPpnNvcbK/PjbyttdJcQbobBFyaFSRVEfDhErhcDumPgsEeoF1YsJlbkYDa9keZ3EqYwV4F3Gy6lwg5bt3CsdfYk3OgQFLPckcuSTkxqJMIwDxIgSNea3BggbJtzTPDcSDPLfdMoJmaucbI9nbOq7DvBDehCX1EuwVjrcRjmpbt+7oFTDWtzgbrTjn+JGUXY0d8qr1bTNN7gKxGQFqr+IyhoJKeYiKrVR5XEKFSVEuZxPVcsbcgKRw2waOwzfRO/6kWsl7I8rAOihfO0G+55hZ27ZpS0BV7XOefKe2hR1Jw64jNI7IOlrldDFWg7EW5DkhqvG5HXF9PTVVQjQU5lJGcrs7+p2/JcVUNOW3jcb9/8AgpZBSPkPlBPUp5Q4Nl1Op6jSy4PJldspqSbISeyss2HsIF2C+xtp790LNgbHfKS0j3BXWAr7nXN1pSVEDmOLXCxUaITlynp1AV0wFc+joOpWMZJQBul8i7kYQoyliqKTbeiNWah80bT2VZKv/wANeGZ8QdkjGWNp+1lOzB0HVx5BdNWiMHVmuFODJsRn8NnljBBlk5Mb+7jyC+kcAwSGjgZBAwNYz6uPNzjzceqzBMIho4RDC3K1upPNzubnHmSu5cRaDa6eEaQspOR8p0Ly11yLIGtfneTa6c1hAbdI3TgKdFbJY6IHcKem8SE3jc5va+n0XNPU6plGQUGr0LbRPFiUc4yVDbO5PGmqW43TzQWs4ujPyu/YouSlaUZhlYGAxTDPE7TXXKpuLhtdDqdlXGKv6ouOuzM19SueIsFMDrtOaJ2rXfsUoCokpK0EIq5iXb6KVmJPBv0FggVolHijroImrHu3JU8NeWgDpugGqQNuuaQY7D4MTLSXWuioaqSY6nypZHASbJ8xgjjFuY1QSTKSXBWyOprzG3IDogqJxzXKDq58zvdH0Dm5rdVSJHI6Wh5R1BOnJV7ie4eByVlp4QNkr4npbszf2qr6M5U0Zhcd3jtqg0ywUWcT7Kcugw7GFRIA0nokUkhJumuL2FrbE6+yl4Vwnx5rua5zGWJawZnOJNmtASQRWbfgPw/gclY90cRGYNLrHcgC+i9Cwz4Z0zvB8WYta2Ns1XIXtDWNe3yRA20cTf2CfYnglovLSxxzMAfdjiZ4472vI5tmtzbBvmJ5LnhXBnxPMspbC1rzFmljEzGzC2kjSfIddHFaVjSVszuTZXMQ4eZBKX0ENQ6nAN5JgGsP/RmAc4Kt1eNBtwRYgr27ieHE2xkj+mqW2+XI+JxHY5iCvnnGp3zSvJi8MsvmYN2663upzhW0PCXjGEuMXYSzla4P6oemxojceo/dJWvI29FtpU6KJobVc3jtLubUqawk6KVktj5djuFP4wbsLoXQ1JkMlMWgE81jZLbLupY8jM7TshA5clY3Pj0FioudQo6iS6huisLw+SpmjgiGaSVwY0dzzPYbnsFyidLJrY7+H/B0mJ1IibdsbbOmktfIzoPxHYfXkvp3h7D4qSJtPTxiONmluZPNzjzJ5lBcJ4DDhlOymhALtDI/70khHmcf0A5CyeTyBje5VUjMyLEamwI6KoVE/mOqZYtV5W9yq+56LHjE8KbK6Vgzafuu4MPvs2/qnkVABbsiRDZToLkLqahAGoCJyRt2ClkI5Id66hbJxTtcNNEJVURGxusOYc1NFNcarnQSCir2kGCceU7E/dKr+LYeYnkbtPynqFY6qjY8d+qDlp3Fvhv1/sd09VGUeDtdFoST0ys2Ww1TvjIJB3C0Am5FljIxGiowALrhoXUnRK3ZeMFFEtMS5waPvED6lWfjjA30kgidezmNex3JzSNfobhI+G4c1REPxNP0N19E4hgcWIQtZVsuGfI5pLXtuLGxHLbTsq4ktmb6uT0fLDrg6oygkAcLq2/Er4dz4afFB8WnebB9tWE7Nk6euxVHY+yLXwQjJPsvsFsoIQ2IsD2Fp5hCYBiILbHcI/EJAWFWTuJGSplDkZYkdDZO8Mbkj1G+qUy2L/fVMjVOdowbKEymNemqlniWA3vYDrdXHgDEH0Ima2K9S4NLC+zYowW6OeTvrfQKqYTSOdUQ5jp4jL+mYXRkzrh7rucXyPDbkk5WuIaPolTpaK1bo9BjdXPjymthF5GyuMbAXPkacwL3E6gEDS3ILVO/FIHTOZUxStnOaRkrBkcbWOnK4XmGGYq6N+hIF+pK9DqZJmQCUg5SN0ObXZWOODQfgnE2I0gdHJC2eK92NY7WLq0F27eg5KqYnUx1uJ5zEafOwtcH2GZwbv3J0HslFZxJKD5JCFpuJvnFpC2T1FnD0KKyOtiywx87FVZhRE00Yt9le5vp9UvDDsrRg0scUjopAMkttX9OhPK2vqncXCUb3Zt2G5zHdtw513Dpa2idb6ItcezzyM2KY4e9l7u35KDGcPdTzOjduCfpc2WUtJnF72Qmvk6DsZ1dFnFw5JJ4iw2KmmzxHf8AND1E5eblCCBJpHBcvXPgDgzc89fJa0I8KK/KR4u93Yhth/3leQL6C+HNJ4eE07ecz5JD3zPyt/8AFoVCats9EwqMFzpT7dyhcRxEF9luuqRDEGN5D81UqeszyPcdmglMMo2dY5iQz2vsqvU4ucxsVHidZme43SSSS5UpSNMMejl8vRQueoyzuuXOAT2ZTsvXDyozMsvfdANGzdRWPJQ1WIRx87noEK3iJt/k0QOGjAVM09UJTYrFJoDY9DopJZhyXHC7G4AfOPQpQES+pu9zTsVCWWNlJqjdhlaokp2fktSNuUZBFYLhrbusElmlFm+HdCDUNe4aN116r3vDJgQB1I+l15Vw1SCKmz28wcCfQ6frZPKLiWRr2uAGmzeVlohpHn57nLRc+L4BVxz0en2sDw0HbxCLsPaxAXyliuGzU0roZ43RyM0c12476aEdwvpuWtLnxzHR2YA22sdFWvjZwZNWtgqaWIySsBjla22Z0fzNOu9jf/cmMzVHhGGzZXp+am7T6Ku1lJJC8slY6N43a9pa4exXAqXWtdcjmaz+a/dNqa52KShFU1QWlJNWPjZZKZgaQRuCD7q3UnDPiU8bmgZwL69Sbn9VQmV3y8rke2q9Qw+qyeXpt07KRqxxTE1FwcyPzShu4sANyrfxLH/poo8thaxHskmP4t4LRM4EgEAdMx2JSSp43MzmsnPk5ZeS6yygLq3hAWu0E372+iBi4YlFg1pFuZ/wvQcMqLMF9QdvTko67FwPKALLr0L9vdlNxXCC6KzvmA0PdC8H8VS078jgXt2tuf8APLU7AKw1smYEqqVkIicHZdHnW3RcpVpCPGpPYVx7I2YtmawNI8psbnKdRf3v/uVcgqg1lufJOcbh8vZ2XL+pVblGtk8XzWyGSKxvRk0xcblRrFffgzgMVViAdOAYqdhmcHfK5wIawO7XN7fhVTP2TcFfCiqrQ2Wc/wBNTutle8XkkvtkZ0PU27XXsLsPjo/6aljJLIW5QXbm3M9ybq51GSSO4ILdCCNtNl51xdiY/qA5p02/ILvBoK2R8RYgSTYpZQvtDK7rolldVZiiZ35aUfiN0LNCjSK9Uy3JQwW3FdBqzt2zT0BPd1QctU0c0gnxd7uyEfOTuVc88eVGJNCXVOIvdoNAgwF01qBRRs5ssyqdsBW3Q2Q5FVhYPZTMrHDQm65c1QvCKdkpx4kjpbuumFF5/UJSEbhVRlf2OiE46DhnUhzJoEfw9Q53ZjsEI2IvOiseE2YMvVRitm6UqRZcGkBLozs8Ee+4/NA7Gx0suKeTK8EcijMZjs/ONni/vz/NX8MnTH9ZPlhDr8mkeoV8wnFo5IoyCLuAuF4+2rzMyvdfKNArLwnW/Y9xcfRFMlOOh58TeCo8UhDGOYyojIdG8j7p+Zjra5SNfUBeD478MsSpib07pWAE+JD52kDW9vmGnUL6JwqYfNe5cDf6KxtcCPZMR6PiZ9O5upBCmw+VrXgvFx+i9l+IHwymIdJRRmVrjmMdwHtcdTlvu3UrxivopIXmOVjmPbu1wII9il/so6q0P8UoWOZmj9QrRgdQXQxuO5aAfUaH9FQsMrCPITpyVw4WqQ5jmc2G9vwu5/VLJFMMqkOMa4hgjjDJWZyfu/uVW6eroS/WNzbncm4H5InFMOp3OzTZ9ebT/wA6JacKouT5z65AP0U9fJsV9pf6XeWtaWAM2AsLdEincSdVrC4mMb5HOI6ON7ei7qXhJI5M1JJ5VFMI2sMj8hOnzE7dLKCskOSwVMr5SXm5J1RjHkyc58FZ6M7hw1cPiscczRqNC0C1xe2rdOgOy87xTD5IHlsrC0nUdHA6hzTsR3C9B+GmKud9kSQRpHrZp6g9f/a9Zd8P6edjjU+dr7O8NoAa0gW8rgLj2IWqKjWjDNtvZ87cKcJ1WISCOmjLhez5CLRxjq523tuvojgzgClwptsxklmAZI92gI3s1mwF/dWLBmRU8XhRxsiZGSA1gAHr3KS4vXufmd/b8vayNCpG3sFNK5jXXjk2bf5XdlSuMNJbd7/UKTHMRu9koOosbdxulmO1Zme5552P5JWzRCOxaTco/HJMsTGdroKlF3Bb4glu63QWU70W9QrjU7WqJgXbpQNFJFTzQBEwUT3bAq7YXwq1oBcLnumpwprRsrtvwyRxV2eejD3DcKeKlsrdUUQHJKaiGyk7Lx0LmsUUzEU/RCSuSlYgkjULMEY9B1CpAn9QqiQrbTquVtWPPTD6avfE8OBv1B2IVxoKtsjQ9h35dD0Koz23aD7IjCcRML7/AHTo4fv6qbjaNKycZb6PR4Zbp8B4tPb70eo9OaqdHUggFpu07FWHBarK63I6H0XRZSa9QucbJ7wnLo5vUn8wluLU2R5tsdQp+GJcstupah0xO0XfDZixovyKcw4zcOaC3ykgX3tukM3lcR3Q1POB4jg4X81gRre1t7KpFqy64HiXiwMffU+U+o0/ZBYngNHVm1VBHKToHOaMw9HDUJTwRNla+I9cw99/zVlfHGBdz7Jl0I1TPP8AiL4L0TmOdSufBIAS27i+MnoQ65t6FeY8I8JVhxBsbmPiyXMriCG+GNLAnQ5jsvf58UZNIyGMktBu49bcllVVZXyNP9ocPQ9Pe6WkzlaPGcVo2Eua/wC6S36FI24VEDo4/VPuN4zFUvI2d5h0N9/zukjJWWuRYrLPTo9DG/xCAA3Rq4kkA3Ub6hvJBSykqbYxP4l7k7Baw7hR1TkaG2c5oe5x5BxuL/VGYNQeM9rPu7v7N5/XZeiUrAwNIFszwB6NCtiV7IZn4bw3hGkoxCCwl5+9c32s529hurdg0xpvsHkvjfrE7p1YT+a3iuGmRjHNF7AKRlA98BY8EOaQ5jj1WhIy2QYrIWOLr2vvpc/4VfxGrDozYgEaEXF07rftoddHt0cO43CpOLQFoLg0gbXPPvZc2PBIU1r7tv3Kgc+4Hpb6KV7bxuPcIKF92ehUpGmITSfMEHij7vRNMdUBUm70suhl2c5rLkN6rHuDRmcbAaqnYjWvleXNJDdmgG2gSxjZ0p8T1+OLRcSxI1sahnVwCStiSCsbZWKtKrteVOR1CWpegHuRFU7VCFTRogjTkFOdUW8oGQ6quNGb6qWqOVixYqmAOoRmDmdRp6hBEKalkyuBWqptnFKuyj3Gw3BsVMLrHVh3HTuFfKCqGjgbg6grzFPOHcUyOyOPldt+E/8ACEl6imKfjPU6wiSIO5hLsNflkB9P1UuFVF2lp5hCv8rkP2UqtHoNbJezuoB/JJKSovdtz5nHTlupm1wdA13MCx9kqhqA1zL31cN+99k7ZNIs+DS5Zm9wW/uP0R+KU7nHf2SPxssrDyzD9bK1tjzSNCPgrJcAwwRguO559kFxDPkeyT7t8rj2cm+KzZQGN5pHxRTl1M4AagXHqEfBLtlV40wzxmXHzNvl/ce+i8wlPLpoR3Xs0I8SNptfM0f7gLH+dl5vx5g7oz48Y2/+xvb+5QyQ5bRoxTp0yuNcttdmc1jRdziAANySlBqyvQ/hpw/f/VSDU6RA8m83+6lHGzRKSSssGBYT4EevzEXcep6DsFNi73MnpYQNMpJ/6iCVZI6YaDqQEDi9LmqQ/wDtLQPQbrRVKjJyt2y24LiZdGGuGoFroPiLHvAtbU/ouMOblv0Vc4qN33VL0IknIx3FrTK1xFg7yu/YqTGKJkg8RpaQebnWDfYKjVm/YphQ1pyi/wCeo9VNPZZwXhhjs17b3/eyR0p+cd1Yp3g63uTpy/IDZV0C0ru6WY8AqE6FLybko1zrNKAaEkmUQi4tqSAxg0zXJ72tZVpspCbcUzXmt/a0D66lJlWK0YsknyZ9BF1kDVOUz5EDVSaImsWVrklqmXTWpel8ylIJWqyKxQbmp1WsSydqmi0WLqh6FUtQdVEtMVSPNzS5TZtaW1pMSOmKaYaArin+YKSRtgR0SvsrH+LB0VhlIZZA3lz9EKrFwtFlu889AmJotVK7w8tjsLI6rdc5uqo+MYi9j25TqDdWfDa4TRBw58uh5hTlo0wla/Y3o5dLLeKyZTHY/fB36AoWjksQsxV5dl7Hkheh2izVEwyNI33C9BwJ4e0S/hH1tqvMKaXNGPRWHhnEiG+Hc26KiZKcS0znO+67mZmaWnmCFBGVK59iE5EQYZHljLT/APmT9EtxWnDri1wd+itbKbzutsdfrulVTR2u0Db9Eo1nj7uBnurGsaPsHEuJ/taDqz1N7D17L1ugpQ0Na0WAAAA2AGgCnpKINH8/lkfDT2/myCQzkbpGXkb2uf2uh6+nuHO55iUww6xe89LD35qaSC7T6o0JYFRm7QVXuId+t1YqVtgQkGJPaX6rvBo9lIxKIjVap7Ze6sGIwMcOiq1Q0xnTZJJF07J2ykG3VBS/Op2Sh47qCp68wpvaKo7qnWb6pdPOGDM4+g5lEV9S1jC92zRp3PRUipr3SOzOPoOQ9EKsEpUSYkzxHl/Mpa6Ioh811znVFaM8opnrLq5Cz1CDkjPVDzSWQbNB1POhXToaeZQeIpNjpElQbpVVusExLknxJ9tEIq2FvirFrzquVtYtZ5jdsxaW1pcBm2nVXHgGWM1TRK0Oa4EWOuqpwTDCKkskaRyKWRXH8D34g4ZHDOfCaGtdyGymoIC2Bo5gXUnE2GySlk17jQEcx3R0jQwAnYhGOxsqplGxaXNISmvCtUWuLb6H9UDxBC1spLdjqosKf5rJZ9AxP8j0OHRwU9Q26W4ZVZ9ObRv22TmJmZJHZoZLhrvKQeSJpq8RuzHqgqc5Xeq1VxX0T7oWtnpmGVQewOBuEXKvO+EsX8J/hPPlO3qvQpZA1t+qaLshONM7paqxFxouastc/M3a1vU9fZBtfc26oxrOiIpuCIX6Imo8re61Tx2QuJzWY48yLN9P8rn0d6ScOOzMJH3nOt6A2/ZORB5UmwoeHGwdAncFY0jdFAfYjqG5cyp1bfMdVd+IpGRtMmYWIta+t+So3iZzdBjwBxBdCVdELbJ1FTk+i4rZGMFtygPZSauhLTdqGlk0sdCn1fXNCquMVxyPcOht76KckisGytYzixkOUaMGgHXulN1t4XCdIzzk72dXW7rhYjQvI9WqmpLWkrFilJGxMWyC6iOixYpNFkadIkdbJdyxYqY1sj9Q6gDLFixXMBtaWLFxxiIpfmFuoWLEGPj7L3IypljDWROda19EQ8fZ5XixA2PosWLoaZfMtFBxZ95CL3toh6eXKbraxcZ06dlo4bqgZT+JpHuNQrrhc5c0tsNFixTiqZse0cztsV1LsCsWJydgdYzmEwwzH3jRxvbr0WLEj0wp32XXCKoOAf7X/X+d0+p3Dn/P5ssWKq6IyCXtJ0FrHf0/miX1MeeS3JqxYuYiYY8WbZKqyoyXN1ixd4FFQxavL3am4CFhrrLFiUsalxZ3VLKqtusWINjRFMzy4oTF4P8ATyHsP1CxYkSGlKkUmUqFYsVUZcnZixYsREP/2Q==',
        true
    ], [
        7,
        'Fernando Pablo',
        'Iglesias',
        2,
        [1, 2],
        'Director de Interoperabilidad, Estándares y Desarrollo',
        'data:image/jpeg;base64,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',
        true
    ], [
        8,
        'Federico',
        'Fontanella',
        2,
        [8, 9],
        'Desarrollador java / Dios... de 10 a 17hs.',
        'https://images-na.ssl-images-amazon.com/images/I/51BoUJYxrgL._AC_SX425_.jpg',
        true
    ], [
        9,
        'Rodrigo',
        'Castiglione',
        0,
        [7],
        'Desarrollador java / Dios... de 10 a 17hs.',
        'https://images-na.ssl-images-amazon.com/images/I/51BoUJYxrgL._AC_SX425_.jpg',
        true
    ], [
        10,
        'Federico',
        'Zelcer',
        2,
        [3, 12, 13],
        'Desarrollador java / Dios... de 10 a 17hs.',
        'https://images-na.ssl-images-amazon.com/images/I/51BoUJYxrgL._AC_SX425_.jpg',
        true
    ], [
        11,
        'Florencia',
        'Alegre',
        1,
        [5, 2],
        'Desarrollador java / Dios... de 10 a 17hs.',
        'https://images-na.ssl-images-amazon.com/images/I/51BoUJYxrgL._AC_SX425_.jpg',
        true
    ], [
        12,
        'Florencia',
        'Badano',
        1,
        [3],
        'Desarrollador java / Dios... de 10 a 17hs.',
        'https://images-na.ssl-images-amazon.com/images/I/51BoUJYxrgL._AC_SX425_.jpg',
        true
    ], [
        13,
        'Matias',
        'Sal',
        1,
        [5],
        'Desarrollador java / Dios... de 10 a 17hs.',
        'https://images-na.ssl-images-amazon.com/images/I/51BoUJYxrgL._AC_SX425_.jpg',
        true
    ], [
        14,
        'Micaela',
        'Abuin',
        1,
        [5],
        'Desarrollador java / Dios... de 10 a 17hs.',
        'https://images-na.ssl-images-amazon.com/images/I/51BoUJYxrgL._AC_SX425_.jpg',
        true
    ], [
        15,
        'Gonzalo',
        'Pereyra',
        0,
        [2],
        'Responsable de QA y Soporte / 1/4 PL / 1/2 enano / 100% duende de jardin',
        'assets/img/png/equipo/soporte/gonza.jpg',
        true
    ], [
        16,
        'Debhora',
        'Ponce',
        0,
        [2],
        'Responsable de QA y Soporte / 1/4 PL / 1/2 enano / 100% duende de jardin',
        'assets/img/png/equipo/soporte/gonza.jpg',
        true
    ], [
        17,
        'Cynthia',
        'Devoto',
        2,
        [2],
        'Responsable de QA y Soporte / 1/4 PL / 1/2 enano / 100% duende de jardin',
        'assets/img/png/equipo/soporte/gonza.jpg',
        true
    ], [
        18,
        'Natalia Solange',
        'Reabarren',
        2,
        [2],
        'Responsable de QA y Soporte / 1/4 PL / 1/2 enano / 100% duende de jardin',
        'assets/img/png/equipo/soporte/gonza.jpg',
        true
    ]
    /* 
   
    ], [
    ], [
    20,
    'Aye',
    '',
    1,
    [2],
    'Desarrollador',
    'https://i.pinimg.com/originals/eb/01/a8/eb01a8e5b2fcc1b6ddea4a8ae4dd5b64.jpg',
    true
    ], [
    21,
    'Lio',
    '',
    1,
    [2],
    'Desarrollador',
    'https://i.pinimg.com/originals/eb/01/a8/eb01a8e5b2fcc1b6ddea4a8ae4dd5b64.jpg',
    true
    ]
     */
];

export const F_REP_APP_LENG = {
    Java: [17, 21],
    PHP: [8.2, 21],
    Node: [18, 20, 0]
}

export const F_REP_APP_ENDPOINT = ['GET', 'POST', 'PUT', 'DELETE']

export const F_REP_APP_DB = ['MySQL', 'Oracle', 'PostgreSQL', 'Otro']

export const F_REP_APP_AMBIENTE = ['Desarrollo', 'QA', 'Producción', 'Otros']

/* 

Tecnología

Lenguaje de Programación

[ ] Java Versión: [ ] 17 [ ] 21
[ ] PHP Versión: [ ] 8.2 [ ] 
[ ] Node.js Versión: [ ] 18 [ ] 20 [ ] Otro:

Especificar: []
Frameworks Utilizados (si aplica)
[]

Repositorio
Nombre del Repositorio[]
URL del Repositorio (si existe)[]

Información de la Aplicación
URL Principal de la Aplicación[]

Endpoints de la Aplicación
[Agregar los endpoints de la API]
Endpoint: []
Método: [GET/POST/PUT/DELETE]
Descripción: []
Endpoint: []
Método: [GET/POST/PUT/DELETE]
Descripción: []
[Añadir más si es necesario]

Servicios que Consumirá la Aplicación
Backends
[Descripción del backend que la aplicación consumirá]

APIs Externas
[Descripción de las APIs externas que se consumirán]

Bases de Datos
Tipo de Base de Datos:
[ ] MySQL [ ] Oracle [ ] PostgreSQL [ ] Otro: []

Nombre de la Base de Datos:[]

Caches
Utilizará un sistema de caché: [ ] Sí [ ] No
Descripción del sistema de caché (si aplica):[]

Información de Despliegue
Ambiente de Despliegue

[ ] Desarrollo [ ] QA [ ] Producción [ ] Otros: []

URL de Despliegue[]

Responsables del Proyecto

Owner/Product Manager/Product Owner

Nombre: []

Contacto: []

Desarrollador(es) Principal(es)

Nombre: []

Contacto: []

Otros Involucrados (QA, DevOps, etc.)

Nombre: []

Rol: []

Contacto: []

Permisos Necesarios

Acceso a Git

Usuarios y sus permisos (lectura/escritura):



Acceso a OpenShift

Usuarios y permisos:



Consumo de Servicios

Acceso a través de 3scale o Rutas Públicas

Tipo de acceso:

[ ] 3scale

[ ] Rutas públicas

Storage

Requiere Storage Local

[ ] Sí

[ ] No

Comentarios Adicionales

[Espacio para agregar cualquier información adicional relevante]
*/