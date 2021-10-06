const sampleTweets = [
    {
        text: '1 https://t.co/rj8E2tEgv3 #WomenWhoCode Moses kuria #javascript client 13173 #messi #PyTorch Tigray #NFT #messi #Ronaldo #Python NHIF #programming kenyatta #project #FailedProjectRaila WhatsApp #AfricanRockstar #PhonyLeaks #CSWeek2021 #PandoraPapers #y',
        username: '@Hank__Moodi'
    },
    {
        text: '2 https://t.co/rj8E2tEgv3 #WomenWhoCode Moses kuria #javasajksdlfaskldfjaklsdfjaklsfjaklsdfjakldscrkjlasdgjklsdfgjskldfgjskdlfgjskldfgjsdklfgjsdlkfgjsdklfgipt client 13173 #messi #PyTorch Tigray #NFT #messi #Ronaldo #Python NHIF #programming kenyatta #project #FailedProjectRaila WhatsApp #AfricanRockstar #PhonyLeaks #CSWeek2021 #PandoraPapers #y',
        username: '@Hank__Moodi'
    },
    {
        text: '3 https://t.co/rj8E2tEgv3 #WomenWhoCode Moses kuria #javascript client 13173 #messi #PyTorch Tigray #NFT #messi #Ronaldo #Python NHIF #programming kenyatta #project #FailedProjectRaila WhatsApp #AfricanRockstar #PhonyLeaks #CSWeek2021 #PandoraPapers #y',
        username: '@Hank__Moodi'
    },
    {
        text: '4 https://t.co/rj8E2tEgv3 #WomenWhoCode Moses kuria #javascript client 13173 #messi #PyTorch Tigray #NFT #messi #Ronaldo #Python NHIF #programming kenyatta #project #FailedProjectRaila WhatsApp #AfricanRockstar #PhonyLeaks #CSWeek2021 #PandoraPapers #y',
        username: '@Hank__Moodi'
    },{
        text: '5 https://t.co/rj8E2tEgv3 #WomenWhoCode Moses kuria #javascript client 13173 #messi #PyTorch Tigray #NFT #messi #Ronaldo #Python NHIF #programming kenyatta #project #FailedProjectRaila WhatsApp #AfricanRockstar #PhonyLeaks #CSWeek2021 #PandoraPapers #y',
        username: '@Hank__Moodi'
    },
    {
        text: '6 https://t.co/rj8E2tEgv3 #WomenWhoCode Moses kuria #javascript client 13173 #messi #PyTorch Tigray #NFT #messi #Ronaldo #Python NHIF #programming kenyatta #project #FailedProjectRaila WhatsApp #AfricanRockstar #PhonyLeaks #CSWeek2021 #PandoraPapers #y',
        username: '@Hank__Moodi'
    },{
        text: '7 https://t.co/rj8E2tEgv3 #WomenWhoCode Moses kuria #javascript client 13173 #messi #PyTorch Tigray #NFT #messi #Ronaldo #Python NHIF #programming kenyatta #project #FailedProjectRaila WhatsApp #AfricanRockstar #PhonyLeaks #CSWeek2021 #PandoraPapers #y',
        username: '@Hank__Moodi'
    },
    {
        text: '8 https://t.co/rj8E2tEgv3 #WomenWhoCode Moses kuria #javascript client 13173 #messi #PyTorch Tigray #NFT #messi #Ronaldo #Python NHIF #programming kenyatta #project #FailedProjectRaila WhatsApp #AfricanRockstar #PhonyLeaks #CSWeek2021 #PandoraPapers #y',
        username: '@Hank__Moodi'
    },{
        text: '9 https://t.co/rj8E2tEgv3 #WomenWhoCode Moses kuria #javascript client 13173 #messi #PyTorch Tigray #NFT #messi #Ronaldo #Python NHIF #programming kenyatta #project #FailedProjectRaila WhatsApp #AfricanRockstar #PhonyLeaks #CSWeek2021 #PandoraPapers #y',
        username: '@Hank__Moodi'
    },
    {
        text: '10 https://t.co/rj8E2tEgv3 #WomenWhoCode Moses kuria #javascript client 13173 #messi #PyTorch Tigray #NFT #messi #Ronaldo #Python NHIF #programming kenyatta #project #FailedProjectRaila WhatsApp #AfricanRockstar #PhonyLeaks #CSWeek2021 #PandoraPapers #y',
        username: '@Hank__Moodi'
    },{
        text: '11 https://t.co/rj8E2tEgv3 #WomenWhoCode Moses kuria #javascript client 13173 #messi #PyTorch Tigray #NFT #messi #Ronaldo #Python NHIF #programming kenyatta #project #FailedProjectRaila WhatsApp #AfricanRockstar #PhonyLeaks #CSWeek2021 #PandoraPapers #y',
        username: '@Hank__Moodi'
    },
    {
        text: '12 https://t.co/rj8E2tEgv3 #WomenWhoCode Moses kuria #javascript client 13173 #messi #PyTorch Tigray #NFT #messi #Ronaldo #Python NHIF #programming kenyatta #project #FailedProjectRaila WhatsApp #AfricanRockstar #PhonyLeaks #CSWeek2021 #PandoraPapers #y',
        username: '@Hank__Moodi'
    },
    {
        text: '12 https://t.co/rj8E2tEgv3 #WomenWhoCode Moses kuria #javascript client 13173 #messi #PyTorch Tigray #NFT #messi #Ronaldo #Python NHIF #programming kenyatta #project #FailedProjectRaila WhatsApp #AfricanRockstar #PhonyLeaks #CSWeek2021 #PandoraPapers #y',
        username: '@Hank__Moodi'
    },
    {
        text: '12 https://t.co/rj8E2tEgv3 #WomenWhoCode Moses kuria #javascript client 13173 #messi #PyTorch Tigray #NFT #messi #Ronaldo #Python NHIF #programming kenyatta #project #FailedProjectRaila WhatsApp #AfricanRockstar #PhonyLeaks #CSWeek2021 #PandoraPapers #y',
        username: '@Hank__Moodi'
    },
    {
        text: '12 https://t.co/rj8E2tEgv3 #WomenWhoCode Moses kuria #javascript client 13173 #messi #PyTorch Tigray #NFT #messi #Ronaldo #Python NHIF #programming kenyatta #project #FailedProjectRaila WhatsApp #AfricanRockstar #PhonyLeaks #CSWeek2021 #PandoraPapers #y',
        username: '@Hank__Moodi'
    },
    {
        text: '12 https://t.co/rj8E2tEgv3 #WomenWhoCode Moses kuria #javascript client 13173 #messi #PyTorch Tigray #NFT #messi #Ronaldo #Python NHIF #programming kenyatta #project #FailedProjectRaila WhatsApp #AfricanRockstar #PhonyLeaks #CSWeek2021 #PandoraPapers #y',
        username: '@Hank__Moodi'
    },
    {
        text: '12 https://t.co/rj8E2tEgv3 #WomenWhoCode Moses kuria #javascript client 13173 #messi #PyTorch Tigray #NFT #messi #Ronaldo #Python NHIF #programming kenyatta #project #FailedProjectRaila WhatsApp #AfricanRockstar #PhonyLeaks #CSWeek2021 #PandoraPapers #y',
        username: '@Hank__Moodi'
    },
    {
        text: '12 https://t.co/rj8E2tEgv3 #WomenWhoCode Moses kuria #javascript client 13173 #messi #PyTorch Tigray #NFT #messi #Ronaldo #Python NHIF #programming kenyatta #project #FailedProjectRaila WhatsApp #AfricanRockstar #PhonyLeaks #CSWeek2021 #PandoraPapers #y',
        username: '@Hank__Moodi'
    },
    {
        text: '12 https://t.co/rj8E2tEgv3 #WomenWhoCode Moses kuria #javascript client 13173 #messi #PyTorch Tigray #NFT #messi #Ronaldo #Python NHIF #programming kenyatta #project #FailedProjectRaila WhatsApp #AfricanRockstar #PhonyLeaks #CSWeek2021 #PandoraPapers #y',
        username: '@Hank__Moodi'
    },
    {
        text: '12 https://t.co/rj8E2tEgv3 #WomenWhoCode Moses kuria #javascript client 13173 #messi #PyTorch Tigray #NFT #messi #Ronaldo #Python NHIF #programming kenyatta #project #FailedProjectRaila WhatsApp #AfricanRockstar #PhonyLeaks #CSWeek2021 #PandoraPapers #y',
        username: '@Hank__Moodi'
    },
    {
        text: '12 https://t.co/rj8E2tEgv3 #WomenWhoCode Moses kuria #javascript client 13173 #messi #PyTorch Tigray #NFT #messi #Ronaldo #Python NHIF #programming kenyatta #project #FailedProjectRaila WhatsApp #AfricanRockstar #PhonyLeaks #CSWeek2021 #PandoraPapers #y',
        username: '@Hank__Moodi'
    },
    {
        text: '12 https://t.co/rj8E2tEgv3 #WomenWhoCode Moses kuria #javascript client 13173 #messi #PyTorch Tigray #NFT #messi #Ronaldo #Python NHIF #programming kenyatta #project #FailedProjectRaila WhatsApp #AfricanRockstar #PhonyLeaks #CSWeek2021 #PandoraPapers #y',
        username: '@Hank__Moodi'
    },
    {
        text: '12 https://t.co/rj8E2tEgv3 #WomenWhoCode Moses kuria #javascript client 13173 #messi #PyTorch Tigray #NFT #messi #Ronaldo #Python NHIF #programming kenyatta #project #FailedProjectRaila WhatsApp #AfricanRockstar #PhonyLeaks #CSWeek2021 #PandoraPapers #y',
        username: '@Hank__Moodi'
    },
    {
        text: '12 https://t.co/rj8E2tEgv3 #WomenWhoCode Moses kuria #javascript client 13173 #messi #PyTorch Tigray #NFT #messi #Ronaldo #Python NHIF #programming kenyatta #project #FailedProjectRaila WhatsApp #AfricanRockstar #PhonyLeaks #CSWeek2021 #PandoraPapers #y',
        username: '@Hank__Moodi'
    },
    {
        text: '12 https://t.co/rj8E2tEgv3 #WomenWhoCode Moses kuria #javascript client 13173 #messi #PyTorch Tigray #NFT #messi #Ronaldo #Python NHIF #programming kenyatta #project #FailedProjectRaila WhatsApp #AfricanRockstar #PhonyLeaks #CSWeek2021 #PandoraPapers #y',
        username: '@Hank__Moodi'
    },
    {
        text: '12 https://t.co/rj8E2tEgv3 #WomenWhoCode Moses kuria #javascript client 13173 #messi #PyTorch Tigray #NFT #messi #Ronaldo #Python NHIF #programming kenyatta #project #FailedProjectRaila WhatsApp #AfricanRockstar #PhonyLeaks #CSWeek2021 #PandoraPapers #y',
        username: '@Hank__Moodi'
    },
    {
        text: '12 https://t.co/rj8E2tEgv3 #WomenWhoCode Moses kuria #javascript client 13173 #messi #PyTorch Tigray #NFT #messi #Ronaldo #Python NHIF #programming kenyatta #project #FailedProjectRaila WhatsApp #AfricanRockstar #PhonyLeaks #CSWeek2021 #PandoraPapers #y',
        username: '@Hank__Moodi'
    },
    {
        text: '12 https://t.co/rj8E2tEgv3 #WomenWhoCode Moses kuria #javascript client 13173 #messi #PyTorch Tigray #NFT #messi #Ronaldo #Python NHIF #programming kenyatta #project #FailedProjectRaila WhatsApp #AfricanRockstar #PhonyLeaks #CSWeek2021 #PandoraPapers #y',
        username: '@Hank__Moodi'
    },
    {
        text: '12 https://t.co/rj8E2tEgv3 #WomenWhoCode Moses kuria #javascript client 13173 #messi #PyTorch Tigray #NFT #messi #Ronaldo #Python NHIF #programming kenyatta #project #FailedProjectRaila WhatsApp #AfricanRockstar #PhonyLeaks #CSWeek2021 #PandoraPapers #y',
        username: '@Hank__Moodi'
    },
    {
        text: '12 https://t.co/rj8E2tEgv3 #WomenWhoCode Moses kuria #javascript client 13173 #messi #PyTorch Tigray #NFT #messi #Ronaldo #Python NHIF #programming kenyatta #project #FailedProjectRaila WhatsApp #AfricanRockstar #PhonyLeaks #CSWeek2021 #PandoraPapers #y',
        username: '@Hank__Moodi'
    },
    {
        text: '12 https://t.co/rj8E2tEgv3 #WomenWhoCode Moses kuria #javascript client 13173 #messi #PyTorch Tigray #NFT #messi #Ronaldo #Python NHIF #programming kenyatta #project #FailedProjectRaila WhatsApp #AfricanRockstar #PhonyLeaks #CSWeek2021 #PandoraPapers #y',
        username: '@Hank__Moodi'
    },
    {
        text: '12 https://t.co/rj8E2tEgv3 #WomenWhoCode Moses kuria #javascript client 13173 #messi #PyTorch Tigray #NFT #messi #Ronaldo #Python NHIF #programming kenyatta #project #FailedProjectRaila WhatsApp #AfricanRockstar #PhonyLeaks #CSWeek2021 #PandoraPapers #y',
        username: '@Hank__Moodi'
    },
    {
        text: '12 https://t.co/rj8E2tEgv3 #WomenWhoCode Moses kuria #javascript client 13173 #messi #PyTorch Tigray #NFT #messi #Ronaldo #Python NHIF #programming kenyatta #project #FailedProjectRaila WhatsApp #AfricanRockstar #PhonyLeaks #CSWeek2021 #PandoraPapers #y',
        username: '@Hank__Moodi'
    },
    {
        text: '12 https://t.co/rj8E2tEgv3 #WomenWhoCode Moses kuria #javascript client 13173 #messi #PyTorch Tigray #NFT #messi #Ronaldo #Python NHIF #programming kenyatta #project #FailedProjectRaila WhatsApp #AfricanRockstar #PhonyLeaks #CSWeek2021 #PandoraPapers #y',
        username: '@Hank__Moodi'
    },
    {
        text: '12 https://t.co/rj8E2tEgv3 #WomenWhoCode Moses kuria #javascript client 13173 #messi #PyTorch Tigray #NFT #messi #Ronaldo #Python NHIF #programming kenyatta #project #FailedProjectRaila WhatsApp #AfricanRockstar #PhonyLeaks #CSWeek2021 #PandoraPapers #y',
        username: '@Hank__Moodi'
    },
    {
        text: '12 https://t.co/rj8E2tEgv3 #WomenWhoCode Moses kuria #javascript client 13173 #messi #PyTorch Tigray #NFT #messi #Ronaldo #Python NHIF #programming kenyatta #project #FailedProjectRaila WhatsApp #AfricanRockstar #PhonyLeaks #CSWeek2021 #PandoraPapers #y',
        username: '@Hank__Moodi'
    },
    {
        text: '12 https://t.co/rj8E2tEgv3 #WomenWhoCode Moses kuria #javascript client 13173 #messi #PyTorch Tigray #NFT #messi #Ronaldo #Python NHIF #programming kenyatta #project #FailedProjectRaila WhatsApp #AfricanRockstar #PhonyLeaks #CSWeek2021 #PandoraPapers #y',
        username: '@Hank__Moodi'
    },
    {
        text: '12 https://t.co/rj8E2tEgv3 #WomenWhoCode Moses kuria #javascript client 13173 #messi #PyTorch Tigray #NFT #messi #Ronaldo #Python NHIF #programming kenyatta #project #FailedProjectRaila WhatsApp #AfricanRockstar #PhonyLeaks #CSWeek2021 #PandoraPapers #y',
        username: '@Hank__Moodi'
    },
    {
        text: '12 https://t.co/rj8E2tEgv3 #WomenWhoCode Moses kuria #javascript client 13173 #messi #PyTorch Tigray #NFT #messi #Ronaldo #Python NHIF #programming kenyatta #project #FailedProjectRaila WhatsApp #AfricanRockstar #PhonyLeaks #CSWeek2021 #PandoraPapers #y',
        username: '@Hank__Moodi'
    },
    {
        text: '12 https://t.co/rj8E2tEgv3 #WomenWhoCode Moses kuria #javascript client 13173 #messi #PyTorch Tigray #NFT #messi #Ronaldo #Python NHIF #programming kenyatta #project #FailedProjectRaila WhatsApp #AfricanRockstar #PhonyLeaks #CSWeek2021 #PandoraPapers #y',
        username: '@Hank__Moodi'
    },
    {
        text: '12 https://t.co/rj8E2tEgv3 #WomenWhoCode Moses kuria #javascript client 13173 #messi #PyTorch Tigray #NFT #messi #Ronaldo #Python NHIF #programming kenyatta #project #FailedProjectRaila WhatsApp #AfricanRockstar #PhonyLeaks #CSWeek2021 #PandoraPapers #y',
        username: '@Hank__Moodi'
    },
    {
        text: '12 https://t.co/rj8E2tEgv3 #WomenWhoCode Moses kuria #javascript client 13173 #messi #PyTorch Tigray #NFT #messi #Ronaldo #Python NHIF #programming kenyatta #project #FailedProjectRaila WhatsApp #AfricanRockstar #PhonyLeaks #CSWeek2021 #PandoraPapers #y',
        username: '@Hank__Moodi'
    },
    {
        text: '12 https://t.co/rj8E2tEgv3 #WomenWhoCode Moses kuria #javascript client 13173 #messi #PyTorch Tigray #NFT #messi #Ronaldo #Python NHIF #programming kenyatta #project #FailedProjectRaila WhatsApp #AfricanRockstar #PhonyLeaks #CSWeek2021 #PandoraPapers #y',
        username: '@Hank__Moodi'
    },
    {
        text: '12 https://t.co/rj8E2tEgv3 #WomenWhoCode Moses kuria #javascript client 13173 #messi #PyTorch Tigray #NFT #messi #Ronaldo #Python NHIF #programming kenyatta #project #FailedProjectRaila WhatsApp #AfricanRockstar #PhonyLeaks #CSWeek2021 #PandoraPapers #y',
        username: '@Hank__Moodi'
    },
    {
        text: '12 https://t.co/rj8E2tEgv3 #WomenWhoCode Moses kuria #javascript client 13173 #messi #PyTorch Tigray #NFT #messi #Ronaldo #Python NHIF #programming kenyatta #project #FailedProjectRaila WhatsApp #AfricanRockstar #PhonyLeaks #CSWeek2021 #PandoraPapers #y',
        username: '@Hank__Moodi'
    },
    {
        text: '12 https://t.co/rj8E2tEgv3 #WomenWhoCode Moses kuria #javascript client 13173 #messi #PyTorch Tigray #NFT #messi #Ronaldo #Python NHIF #programming kenyatta #project #FailedProjectRaila WhatsApp #AfricanRockstar #PhonyLeaks #CSWeek2021 #PandoraPapers #y',
        username: '@Hank__Moodi'
    },
    {
        text: '12 https://t.co/rj8E2tEgv3 #WomenWhoCode Moses kuria #javascript client 13173 #messi #PyTorch Tigray #NFT #messi #Ronaldo #Python NHIF #programming kenyatta #project #FailedProjectRaila WhatsApp #AfricanRockstar #PhonyLeaks #CSWeek2021 #PandoraPapers #y',
        username: '@Hank__Moodi'
    },
    {
        text: '12 https://t.co/rj8E2tEgv3 #WomenWhoCode Moses kuria #javascript client 13173 #messi #PyTorch Tigray #NFT #messi #Ronaldo #Python NHIF #programming kenyatta #project #FailedProjectRaila WhatsApp #AfricanRockstar #PhonyLeaks #CSWeek2021 #PandoraPapers #y',
        username: '@Hank__Moodi'
    },
    {
        text: '12 https://t.co/rj8E2tEgv3 #WomenWhoCode Moses kuria #javascript client 13173 #messi #PyTorch Tigray #NFT #messi #Ronaldo #Python NHIF #programming kenyatta #project #FailedProjectRaila WhatsApp #AfricanRockstar #PhonyLeaks #CSWeek2021 #PandoraPapers #y',
        username: '@Hank__Moodi'
    },
    {
        text: '12 https://t.co/rj8E2tEgv3 #WomenWhoCode Moses kuria #javascript client 13173 #messi #PyTorch Tigray #NFT #messi #Ronaldo #Python NHIF #programming kenyatta #project #FailedProjectRaila WhatsApp #AfricanRockstar #PhonyLeaks #CSWeek2021 #PandoraPapers #y',
        username: '@Hank__Moodi'
    },
    {
        text: '12 https://t.co/rj8E2tEgv3 #WomenWhoCode Moses kuria #javascript client 13173 #messi #PyTorch Tigray #NFT #messi #Ronaldo #Python NHIF #programming kenyatta #project #FailedProjectRaila WhatsApp #AfricanRockstar #PhonyLeaks #CSWeek2021 #PandoraPapers #y',
        username: '@Hank__Moodi'
    },
    {
        text: '12 https://t.co/rj8E2tEgv3 #WomenWhoCode Moses kuria #javascript client 13173 #messi #PyTorch Tigray #NFT #messi #Ronaldo #Python NHIF #programming kenyatta #project #FailedProjectRaila WhatsApp #AfricanRockstar #PhonyLeaks #CSWeek2021 #PandoraPapers #y',
        username: '@Hank__Moodi'
    },
    {
        text: '12 https://t.co/rj8E2tEgv3 #WomenWhoCode Moses kuria #javascript client 13173 #messi #PyTorch Tigray #NFT #messi #Ronaldo #Python NHIF #programming kenyatta #project #FailedProjectRaila WhatsApp #AfricanRockstar #PhonyLeaks #CSWeek2021 #PandoraPapers #y',
        username: '@Hank__Moodi'
    },
    {
        text: '12 https://t.co/rj8E2tEgv3 #WomenWhoCode Moses kuria #javascript client 13173 #messi #PyTorch Tigray #NFT #messi #Ronaldo #Python NHIF #programming kenyatta #project #FailedProjectRaila WhatsApp #AfricanRockstar #PhonyLeaks #CSWeek2021 #PandoraPapers #y',
        username: '@Hank__Moodi'
    },
    {
        text: '12 https://t.co/rj8E2tEgv3 #WomenWhoCode Moses kuria #javascript client 13173 #messi #PyTorch Tigray #NFT #messi #Ronaldo #Python NHIF #programming kenyatta #project #FailedProjectRaila WhatsApp #AfricanRockstar #PhonyLeaks #CSWeek2021 #PandoraPapers #y',
        username: '@Hank__Moodi'
    },
    {
        text: '12 https://t.co/rj8E2tEgv3 #WomenWhoCode Moses kuria #javascript client 13173 #messi #PyTorch Tigray #NFT #messi #Ronaldo #Python NHIF #programming kenyatta #project #FailedProjectRaila WhatsApp #AfricanRockstar #PhonyLeaks #CSWeek2021 #PandoraPapers #y',
        username: '@Hank__Moodi'
    },
    
]

export default sampleTweets