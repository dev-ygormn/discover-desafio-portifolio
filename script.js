

async function buscaProfileApiGitHub() {
    try {
        let consultaUser = await fetch("https://api.github.com/users/dev-ygormn")
        let consultaUserConvertida = await consultaUser.json()

        imgPerfil = document.querySelectorAll('[data-photo-perfil]')
        
            imgPerfil.forEach((elemento) => {
                elemento.setAttribute("src", `${consultaUserConvertida.avatar_url}`)
            })

        
        linkGit = document.querySelector('[data-link-github]')

        linkGit.setAttribute("href", `${consultaUserConvertida.html_url}`)


        // imgPerfil[0].setAttribute("src", `${consultaUserConvertida.avatar_url}`)
        // imgPerfil[1].setAttribute("src", `${consultaUserConvertida.avatar_url}`)
    
        
    } catch (erro) {
        console.log(erro)
    }
}


async function criaCardRepo() {
    try {
        let consultaRepo = await fetch("https://api.github.com/users/dev-ygormn/repos")
        let consultaRepoConvertida = await consultaRepo.json()
        // console.log(consultaRepoConvertida)

        const cardsProjetos = document.querySelector('[data-cards-projetos]')

        consultaRepoConvertida.forEach(function(elemento){

            cardsProjetos.innerHTML += `
                <div class="projetos card-main">
                    <a href= ${elemento.html_url}>
                        <div class="projetos-titulo">
                            <img src="./assets/folder.svg" />
                            <span>${elemento.name}</span>
                        </div>
                        <div class="projetos-descricao">
                            <p>${elemento.description}</p>
                        </div>
                        <div class="projetos-rodape">
                            <img src="./assets/star.svg">
                            <p>100</p>

                            <img src="./assets/git-branch.svg">
                            <p>100</p>

                            <span></span>
                            <p>${elemento.language}</p>

                        </div>
                    </a>
                </div>
            `
        })

    } catch (erro) {
        console.log(erro)
    }
}

buscaProfileApiGitHub();
criaCardRepo();