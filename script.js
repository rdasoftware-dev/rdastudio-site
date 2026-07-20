document.addEventListener("DOMContentLoaded", () => {

    /* ==========================================================================
       PÁGINA 1: LOGICA DA HOME (INDEX.HTML) - COMETA PROGRESSIVO
       ========================================================================== */
    const cometElement = document.querySelector('.cometa');
    const satelliteElement = document.querySelector('.satelite');

    if (cometElement && satelliteElement) {
        let delayAtual = 5000; // Primeiro disparo aos 5 segundos

        function agendarCometa() {
            setTimeout(() => {
                cometElement.classList.add('rodando');
                satelliteElement.classList.add('clareando');

                setTimeout(() => {
                    cometElement.classList.remove('rodando');
                    satelliteElement.classList.remove('clareando');
                }, 8000); // Duração exata da animação CSS

                // Ajuste progressivo da timeline conforme pedido
                if (delayAtual === 5000) {
                    delayAtual = 10000; // Avança para fechar no segundo 15
                } else {
                    delayAtual += 5000; // Soma +5s a cada ciclo seguinte (20s, 25s...)
                }

                agendarCometa();
            }, delayAtual);
        }
        agendarCometa();
    }

    /* ==========================================================================
       PÁGINA 2: JORNADA EM MARTE (SOBRE.HTML) - ROBSON DANTAS DE AGUIAR
       ========================================================================== */
    const theater = document.getElementById('marsTheater');
    const rover = document.getElementById('chineseRover');
    const hudBox = document.getElementById('hudBox');
    const hudTitle = document.getElementById('hudTitle');
    const hudText = document.getElementById('hudText');

    if (theater && rover) {
        // Sequência narrativa das regiões de Marte e dados do projeto
        const estágios = [
            {
                leftPosition: '10%',
                title: 'Região 1: Utopia Planitia',
                text: 'O rover chinês inicia a varredura do solo. Conexão estabelecida com a base de dados centralizada do ecossistema RDAStudio.'
            },
            {
                leftPosition: '45%',
                title: 'Região 2: Olympus Foothills',
                text: 'Coletando amostras geológicas complexas. O projeto RDAStudio visa integrar conceitos avançados de automação e designs responsivos focados em usabilidade.'
            },
            {
                leftPosition: '85%',
                title: 'Região 3: Valles Marineris',
                text: 'Fim da rota terrestre alcançado. Sistemas de mapeamento finalizados com sucesso para a assinatura corporativa.'
            }
        ];

        let estagioAtual = 0;

        function executarJornada() {
            if (estagioAtual < estágios.length) {
                const info = estágios[estagioAtual];
                
                // Move o rover para a próxima parada
                rover.style.left = info.leftPosition;
                
                // Atualiza o texto descritivo no HUD técnico
                setTimeout(() => {
                    hudTitle.textContent = info.title;
                    hudText.textContent = info.text;
                    
                    // Prepara a próxima parada após uma pausa para leitura do usuário
                    estagioAtual++;
                    setTimeout(executarJornada, 5000);
                }, 4000); // Aguarda o rover terminar o deslocamento visual para atualizar

            } else {
                // FIM DA JORNADA: Transição tridimensional da câmera olhando para o céu estrelado
                setTimeout(() => {
                    hudBox.style.opacity = '0';
                    theater.classList.add('camera-tilt-up');
                }, 2000);
            }
        }

        // Inicia a jornada automática em Marte após 1.5 segundos da página aberta
        setTimeout(executarJornada, 1500);
    }
});

