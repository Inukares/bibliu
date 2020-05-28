module.exports = {
    'rdf:RDF': {
        $: {
            'xml:base': 'http://www.gutenberg.org/',
            'xmlns:rdfs': 'http://www.w3.org/2000/01/rdf-schema#',
            'xmlns:cc': 'http://web.resource.org/cc/',
            'xmlns:dcam': 'http://purl.org/dc/dcam/',
            'xmlns:rdf': 'http://www.w3.org/1999/02/22-rdf-syntax-ns#',
            'xmlns:dcterms': 'http://purl.org/dc/terms/',
            'xmlns:pgterms': 'http://www.gutenberg.org/2009/pgterms/',
        },
        'pgterms:ebook': {
            $: { 'rdf:about': 'ebooks/18' },
            'dcterms:creator': [
                {
                    'pgterms:agent': {
                        $: { 'rdf:about': '2009/agents/14' },
                        'pgterms:name': 'Madison, James',
                        'pgterms:webpage': {
                            $: {
                                'rdf:resource':
                                    'http://en.wikipedia.org/wiki/James_Madison',
                            },
                        },
                        'pgterms:birthdate': {
                            _: '1751',
                            $: {
                                'rdf:datatype':
                                    'http://www.w3.org/2001/XMLSchema#integer',
                            },
                        },
                        'pgterms:alias': 'United States President (1809-1817)',
                        'pgterms:deathdate': {
                            _: '1836',
                            $: {
                                'rdf:datatype':
                                    'http://www.w3.org/2001/XMLSchema#integer',
                            },
                        },
                    },
                },
                {
                    'pgterms:agent': {
                        $: { 'rdf:about': '2009/agents/13' },
                        'pgterms:deathdate': {
                            _: '1804',
                            $: {
                                'rdf:datatype':
                                    'http://www.w3.org/2001/XMLSchema#integer',
                            },
                        },
                        'pgterms:webpage': {
                            $: {
                                'rdf:resource':
                                    'http://en.wikipedia.org/wiki/Alexander_Hamilton',
                            },
                        },
                        'pgterms:name': 'Hamilton, Alexander',
                        'pgterms:birthdate': {
                            _: '1757',
                            $: {
                                'rdf:datatype':
                                    'http://www.w3.org/2001/XMLSchema#integer',
                            },
                        },
                    },
                },
                {
                    'pgterms:agent': {
                        $: { 'rdf:about': '2009/agents/15' },
                        'pgterms:birthdate': {
                            _: '1745',
                            $: {
                                'rdf:datatype':
                                    'http://www.w3.org/2001/XMLSchema#integer',
                            },
                        },
                        'pgterms:deathdate': {
                            _: '1829',
                            $: {
                                'rdf:datatype':
                                    'http://www.w3.org/2001/XMLSchema#integer',
                            },
                        },
                        'pgterms:alias': 'Jay, J. (John)',
                        'pgterms:webpage': {
                            $: {
                                'rdf:resource':
                                    'http://en.wikipedia.org/wiki/John_Jay',
                            },
                        },
                        'pgterms:name': 'Jay, John',
                    },
                },
            ],
            'dcterms:issued': {
                _: '1991-08-01',
                $: {
                    'rdf:datatype': 'http://www.w3.org/2001/XMLSchema#date',
                },
            },
            'dcterms:subject': [
                {
                    'rdf:Description': {
                        $: { 'rdf:nodeID': 'N3feeca44037c49018f2cebb8dc3de15f' },
                        'dcam:memberOf': {
                            $: { 'rdf:resource': 'http://purl.org/dc/terms/LCSH' },
                        },
                        'rdf:value':
                            'Constitutional history -- United States -- Sources',
                    },
                },
                {
                    'rdf:Description': {
                        $: { 'rdf:nodeID': 'N2455e515631540a09e08eb8cd9680cd3' },
                        'rdf:value': 'KF',
                        'dcam:memberOf': {
                            $: { 'rdf:resource': 'http://purl.org/dc/terms/LCC' },
                        },
                    },
                },
                {
                    'rdf:Description': {
                        $: { 'rdf:nodeID': 'Nb5d5e08cae7146338ca73c3a6a390245' },
                        'rdf:value': 'JK',
                        'dcam:memberOf': {
                            $: { 'rdf:resource': 'http://purl.org/dc/terms/LCC' },
                        },
                    },
                },
                {
                    'rdf:Description': {
                        $: { 'rdf:nodeID': 'Nfe8ccfc460e74471a124615159fa4167' },
                        'rdf:value': 'Constitutional law -- United States',
                        'dcam:memberOf': {
                            $: { 'rdf:resource': 'http://purl.org/dc/terms/LCSH' },
                        },
                    },
                },
            ],
            'dcterms:hasFormat': [
                {
                    'pgterms:file': {
                        $: {
                            'rdf:about':
                                'http://www.gutenberg.org/ebooks/18.kindle.images',
                        },
                        'dcterms:modified': {
                            _: '2020-05-01T03:31:10.573164',
                            $: {
                                'rdf:datatype':
                                    'http://www.w3.org/2001/XMLSchema#dateTime',
                            },
                        },
                        'dcterms:format': {
                            'rdf:Description': {
                                $: {
                                    'rdf:nodeID': 'N712368090a9f400bb9e73d91f1f6f779',
                                },
                                'rdf:value': {
                                    _: 'application/x-mobipocket-ebook',
                                    $: {
                                        'rdf:datatype': 'http://purl.org/dc/terms/IMT',
                                    },
                                },
                                'dcam:memberOf': {
                                    $: {
                                        'rdf:resource': 'http://purl.org/dc/terms/IMT',
                                    },
                                },
                            },
                        },
                        'dcterms:isFormatOf': {
                            $: { 'rdf:resource': 'ebooks/18' },
                        },
                        'dcterms:extent': {
                            _: '1967902',
                            $: {
                                'rdf:datatype':
                                    'http://www.w3.org/2001/XMLSchema#integer',
                            },
                        },
                    },
                },
                {
                    'pgterms:file': {
                        $: {
                            'rdf:about': 'http://www.gutenberg.org/files/18/18.txt',
                        },
                        'dcterms:isFormatOf': {
                            $: { 'rdf:resource': 'ebooks/18' },
                        },
                        'dcterms:extent': {
                            _: '1213088',
                            $: {
                                'rdf:datatype':
                                    'http://www.w3.org/2001/XMLSchema#integer',
                            },
                        },
                        'dcterms:format': {
                            'rdf:Description': {
                                $: {
                                    'rdf:nodeID': 'N3c210cd506784adf9e5a7d8440ac0383',
                                },
                                'rdf:value': {
                                    _: 'text/plain; charset=us-ascii',
                                    $: {
                                        'rdf:datatype': 'http://purl.org/dc/terms/IMT',
                                    },
                                },
                                'dcam:memberOf': {
                                    $: {
                                        'rdf:resource': 'http://purl.org/dc/terms/IMT',
                                    },
                                },
                            },
                        },
                        'dcterms:modified': {
                            _: '2011-12-11T22:44:12',
                            $: {
                                'rdf:datatype':
                                    'http://www.w3.org/2001/XMLSchema#dateTime',
                            },
                        },
                    },
                },
                {
                    'pgterms:file': {
                        $: {
                            'rdf:about':
                                'http://www.gutenberg.org/ebooks/18.txt.utf-8',
                        },
                        'dcterms:modified': {
                            _: '2020-05-01T03:31:06.043234',
                            $: {
                                'rdf:datatype':
                                    'http://www.w3.org/2001/XMLSchema#dateTime',
                            },
                        },
                        'dcterms:isFormatOf': {
                            $: { 'rdf:resource': 'ebooks/18' },
                        },
                        'dcterms:extent': {
                            _: '1213060',
                            $: {
                                'rdf:datatype':
                                    'http://www.w3.org/2001/XMLSchema#integer',
                            },
                        },
                        'dcterms:format': {
                            'rdf:Description': {
                                $: {
                                    'rdf:nodeID': 'N8ed8d68d82f64124b9960dc982e02ced',
                                },
                                'dcam:memberOf': {
                                    $: {
                                        'rdf:resource': 'http://purl.org/dc/terms/IMT',
                                    },
                                },
                                'rdf:value': {
                                    _: 'text/plain',
                                    $: {
                                        'rdf:datatype': 'http://purl.org/dc/terms/IMT',
                                    },
                                },
                            },
                        },
                    },
                },
                {
                    'pgterms:file': {
                        $: {
                            'rdf:about':
                                'http://www.gutenberg.org/ebooks/18.kindle.noimages',
                        },
                        'dcterms:format': {
                            'rdf:Description': {
                                $: {
                                    'rdf:nodeID': 'N5b05a6bbc4074b4789183f59d05bdc89',
                                },
                                'rdf:value': {
                                    _: 'application/x-mobipocket-ebook',
                                    $: {
                                        'rdf:datatype': 'http://purl.org/dc/terms/IMT',
                                    },
                                },
                                'dcam:memberOf': {
                                    $: {
                                        'rdf:resource': 'http://purl.org/dc/terms/IMT',
                                    },
                                },
                            },
                        },
                        'dcterms:extent': {
                            _: '1967886',
                            $: {
                                'rdf:datatype':
                                    'http://www.w3.org/2001/XMLSchema#integer',
                            },
                        },
                        'dcterms:isFormatOf': {
                            $: { 'rdf:resource': 'ebooks/18' },
                        },
                        'dcterms:modified': {
                            _: '2020-05-01T03:31:13.186451',
                            $: {
                                'rdf:datatype':
                                    'http://www.w3.org/2001/XMLSchema#dateTime',
                            },
                        },
                    },
                },
                {
                    'pgterms:file': {
                        $: {
                            'rdf:about':
                                'http://www.gutenberg.org/ebooks/18.epub.noimages',
                        },
                        'dcterms:isFormatOf': {
                            $: { 'rdf:resource': 'ebooks/18' },
                        },
                        'dcterms:extent': {
                            _: '478794',
                            $: {
                                'rdf:datatype':
                                    'http://www.w3.org/2001/XMLSchema#integer',
                            },
                        },
                        'dcterms:format': {
                            'rdf:Description': {
                                $: {
                                    'rdf:nodeID': 'N66fbf3a0053143a6a4d50ce8b3c468d6',
                                },
                                'dcam:memberOf': {
                                    $: {
                                        'rdf:resource': 'http://purl.org/dc/terms/IMT',
                                    },
                                },
                                'rdf:value': {
                                    _: 'application/epub+zip',
                                    $: {
                                        'rdf:datatype': 'http://purl.org/dc/terms/IMT',
                                    },
                                },
                            },
                        },
                        'dcterms:modified': {
                            _: '2020-05-01T03:31:07.997195',
                            $: {
                                'rdf:datatype':
                                    'http://www.w3.org/2001/XMLSchema#dateTime',
                            },
                        },
                    },
                },
                {
                    'pgterms:file': {
                        $: {
                            'rdf:about': 'http://www.gutenberg.org/ebooks/18.rdf',
                        },
                        'dcterms:format': {
                            'rdf:Description': {
                                $: {
                                    'rdf:nodeID': 'N500845783dcd4113ad05de29d4e58989',
                                },
                                'dcam:memberOf': {
                                    $: {
                                        'rdf:resource': 'http://purl.org/dc/terms/IMT',
                                    },
                                },
                                'rdf:value': {
                                    _: 'application/rdf+xml',
                                    $: {
                                        'rdf:datatype': 'http://purl.org/dc/terms/IMT',
                                    },
                                },
                            },
                        },
                        'dcterms:extent': {
                            _: '14565',
                            $: {
                                'rdf:datatype':
                                    'http://www.w3.org/2001/XMLSchema#integer',
                            },
                        },
                        'dcterms:isFormatOf': {
                            $: { 'rdf:resource': 'ebooks/18' },
                        },
                        'dcterms:modified': {
                            _: '2020-05-07T05:00:05.468074',
                            $: {
                                'rdf:datatype':
                                    'http://www.w3.org/2001/XMLSchema#dateTime',
                            },
                        },
                    },
                },
                {
                    'pgterms:file': {
                        $: {
                            'rdf:about': 'http://www.gutenberg.org/files/18/18.zip',
                        },
                        'dcterms:extent': {
                            _: '401661',
                            $: {
                                'rdf:datatype':
                                    'http://www.w3.org/2001/XMLSchema#integer',
                            },
                        },
                        'dcterms:format': [
                            {
                                'rdf:Description': {
                                    $: {
                                        'rdf:nodeID': 'N9de892073fa44cfd8feb6ede67478ba9',
                                    },
                                    'dcam:memberOf': {
                                        $: {
                                            'rdf:resource': 'http://purl.org/dc/terms/IMT',
                                        },
                                    },
                                    'rdf:value': {
                                        _: 'text/plain; charset=us-ascii',
                                        $: {
                                            'rdf:datatype': 'http://purl.org/dc/terms/IMT',
                                        },
                                    },
                                },
                            },
                            {
                                'rdf:Description': {
                                    $: {
                                        'rdf:nodeID': 'N556156bc701e4dfcb398e388ac6ee8b7',
                                    },
                                    'dcam:memberOf': {
                                        $: {
                                            'rdf:resource': 'http://purl.org/dc/terms/IMT',
                                        },
                                    },
                                    'rdf:value': {
                                        _: 'application/zip',
                                        $: {
                                            'rdf:datatype': 'http://purl.org/dc/terms/IMT',
                                        },
                                    },
                                },
                            },
                        ],
                        'dcterms:isFormatOf': {
                            $: { 'rdf:resource': 'ebooks/18' },
                        },
                        'dcterms:modified': {
                            _: '2011-12-11T22:45:02',
                            $: {
                                'rdf:datatype':
                                    'http://www.w3.org/2001/XMLSchema#dateTime',
                            },
                        },
                    },
                },
                {
                    'pgterms:file': {
                        $: {
                            'rdf:about':
                                'http://www.gutenberg.org/ebooks/18.epub.images',
                        },
                        'dcterms:isFormatOf': {
                            $: { 'rdf:resource': 'ebooks/18' },
                        },
                        'dcterms:format': {
                            'rdf:Description': {
                                $: {
                                    'rdf:nodeID': 'N947b5f0534204b46a6a37a6a0226781b',
                                },
                                'dcam:memberOf': {
                                    $: {
                                        'rdf:resource': 'http://purl.org/dc/terms/IMT',
                                    },
                                },
                                'rdf:value': {
                                    _: 'application/epub+zip',
                                    $: {
                                        'rdf:datatype': 'http://purl.org/dc/terms/IMT',
                                    },
                                },
                            },
                        },
                        'dcterms:extent': {
                            _: '478794',
                            $: {
                                'rdf:datatype':
                                    'http://www.w3.org/2001/XMLSchema#integer',
                            },
                        },
                        'dcterms:modified': {
                            _: '2020-05-01T03:31:07.682220',
                            $: {
                                'rdf:datatype':
                                    'http://www.w3.org/2001/XMLSchema#dateTime',
                            },
                        },
                    },
                },
                {
                    'pgterms:file': {
                        $: {
                            'rdf:about':
                                'http://www.gutenberg.org/ebooks/18.html.images',
                        },
                        'dcterms:isFormatOf': {
                            $: { 'rdf:resource': 'ebooks/18' },
                        },
                        'dcterms:extent': {
                            _: '1342812',
                            $: {
                                'rdf:datatype':
                                    'http://www.w3.org/2001/XMLSchema#integer',
                            },
                        },
                        'dcterms:modified': {
                            _: '2020-05-01T03:31:06.891219',
                            $: {
                                'rdf:datatype':
                                    'http://www.w3.org/2001/XMLSchema#dateTime',
                            },
                        },
                        'dcterms:format': {
                            'rdf:Description': {
                                $: {
                                    'rdf:nodeID': 'N7670b7da9a97488ba169d33a391b9f11',
                                },
                                'rdf:value': {
                                    _: 'text/html',
                                    $: {
                                        'rdf:datatype': 'http://purl.org/dc/terms/IMT',
                                    },
                                },
                                'dcam:memberOf': {
                                    $: {
                                        'rdf:resource': 'http://purl.org/dc/terms/IMT',
                                    },
                                },
                            },
                        },
                    },
                },
                {
                    'pgterms:file': {
                        $: {
                            'rdf:about':
                                'http://www.gutenberg.org/cache/epub/18/pg18.cover.medium.jpg',
                        },
                        'dcterms:isFormatOf': {
                            $: { 'rdf:resource': 'ebooks/18' },
                        },
                        'dcterms:format': {
                            'rdf:Description': {
                                $: {
                                    'rdf:nodeID': 'Ncf06e538c27d4db487465ade4ed79bf8',
                                },
                                'dcam:memberOf': {
                                    $: {
                                        'rdf:resource': 'http://purl.org/dc/terms/IMT',
                                    },
                                },
                                'rdf:value': {
                                    _: 'image/jpeg',
                                    $: {
                                        'rdf:datatype': 'http://purl.org/dc/terms/IMT',
                                    },
                                },
                            },
                        },
                        'dcterms:modified': {
                            _: '2020-05-01T03:31:13.239453',
                            $: {
                                'rdf:datatype':
                                    'http://www.w3.org/2001/XMLSchema#dateTime',
                            },
                        },
                        'dcterms:extent': {
                            _: '9296',
                            $: {
                                'rdf:datatype':
                                    'http://www.w3.org/2001/XMLSchema#integer',
                            },
                        },
                    },
                },
                {
                    'pgterms:file': {
                        $: {
                            'rdf:about':
                                'http://www.gutenberg.org/cache/epub/18/pg18.cover.small.jpg',
                        },
                        'dcterms:extent': {
                            _: '2622',
                            $: {
                                'rdf:datatype':
                                    'http://www.w3.org/2001/XMLSchema#integer',
                            },
                        },
                        'dcterms:isFormatOf': {
                            $: { 'rdf:resource': 'ebooks/18' },
                        },
                        'dcterms:format': {
                            'rdf:Description': {
                                $: {
                                    'rdf:nodeID': 'N330852cb57c343d486f3829f7c3ef6eb',
                                },
                                'rdf:value': {
                                    _: 'image/jpeg',
                                    $: {
                                        'rdf:datatype': 'http://purl.org/dc/terms/IMT',
                                    },
                                },
                                'dcam:memberOf': {
                                    $: {
                                        'rdf:resource': 'http://purl.org/dc/terms/IMT',
                                    },
                                },
                            },
                        },
                        'dcterms:modified': {
                            _: '2020-05-01T03:31:13.216449',
                            $: {
                                'rdf:datatype':
                                    'http://www.w3.org/2001/XMLSchema#dateTime',
                            },
                        },
                    },
                },
                {
                    'pgterms:file': {
                        $: {
                            'rdf:about':
                                'http://www.gutenberg.org/ebooks/18.html.noimages',
                        },
                        'dcterms:isFormatOf': {
                            $: { 'rdf:resource': 'ebooks/18' },
                        },
                        'dcterms:format': {
                            'rdf:Description': {
                                $: {
                                    'rdf:nodeID': 'N96c5ba888ac84d488ebff6f13ba54771',
                                },
                                'dcam:memberOf': {
                                    $: {
                                        'rdf:resource': 'http://purl.org/dc/terms/IMT',
                                    },
                                },
                                'rdf:value': {
                                    _: 'text/html',
                                    $: {
                                        'rdf:datatype': 'http://purl.org/dc/terms/IMT',
                                    },
                                },
                            },
                        },
                        'dcterms:modified': {
                            _: '2020-05-01T03:31:07.158193',
                            $: {
                                'rdf:datatype':
                                    'http://www.w3.org/2001/XMLSchema#dateTime',
                            },
                        },
                        'dcterms:extent': {
                            _: '1342812',
                            $: {
                                'rdf:datatype':
                                    'http://www.w3.org/2001/XMLSchema#integer',
                            },
                        },
                    },
                },
            ],
            'dcterms:publisher': 'Project Gutenberg',
            'dcterms:type': {
                'rdf:Description': {
                    $: { 'rdf:nodeID': 'N6d9eac0c5c1344309c36d9c4f49a4068' },
                    'rdf:value': 'Text',
                    'dcam:memberOf': {
                        $: {
                            'rdf:resource': 'http://purl.org/dc/terms/DCMIType',
                        },
                    },
                },
            },
            'dcterms:description': 'Essays written 1787-88',
            'pgterms:bookshelf': {
                'rdf:Description': {
                    $: { 'rdf:nodeID': 'N6835b2ce0b7a4d719421bf275b82d70c' },
                    'dcam:memberOf': {
                        $: { 'rdf:resource': '2009/pgterms/Bookshelf' },
                    },
                    'rdf:value': 'Politics',
                },
            },
            'dcterms:language': {
                'rdf:Description': {
                    $: { 'rdf:nodeID': 'Na85ca8f6a4cc47af9adea8345f7a26e4' },
                    'rdf:value': {
                        _: 'en',
                        $: { 'rdf:datatype': 'http://purl.org/dc/terms/RFC4646' },
                    },
                },
            },
            'dcterms:title': 'The Federalist Papers',
            'dcterms:license': { $: { 'rdf:resource': 'license' } },
            'dcterms:rights': 'Public domain in the USA.',
            'pgterms:downloads': {
                _: '729',
                $: {
                    'rdf:datatype': 'http://www.w3.org/2001/XMLSchema#integer',
                },
            },
        },
        'cc:Work': {
            $: { 'rdf:about': '' },
            'cc:license': {
                $: {
                    'rdf:resource':
                        'https://creativecommons.org/publicdomain/zero/1.0/',
                },
            },
            'rdfs:comment':
                'Archives containing the RDF files for *all* our books can be downloaded at\n            http://www.gutenberg.org/wiki/Gutenberg:Feeds#The_Complete_Project_Gutenberg_Catalog',
        },
        'rdf:Description': [
            {
                $: {
                    'rdf:about': 'http://en.wikipedia.org/wiki/James_Madison',
                },
                'dcterms:description': 'Wikipedia',
            },
            {
                $: { 'rdf:about': 'http://en.wikipedia.org/wiki/John_Jay' },
                'dcterms:description': 'Wikipedia',
            },
            {
                $: {
                    'rdf:about':
                        'http://en.wikipedia.org/wiki/Alexander_Hamilton',
                },
                'dcterms:description': 'Wikipedia',
            },
        ],
    },
};
