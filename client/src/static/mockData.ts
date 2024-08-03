import {
	ANGGUR_LAUT_COCOL_SAMBAL,
	BAKSO_SEAFOOD_MALANG,
	CAFE_LAUT_INDAH,
	CUMI_ASAM_MANIS,
	CUMI_BAKAR_TERIYAKI,
	CUMI_GORENG_TEPUNG,
	CUMI_REBUS,
	CUMI_SAUS_PADANG,
	CUMI_TUMIS_PEDAS,
	GADO2_SEAFOOD_BU_RINI,
	IKAN_BAKAR_JIMBARAN,
	IKAN_BAKAR_KECAP,
	IKAN_BANDENG_BAKAR,
	IKAN_GURAME_ASAM_MANIS,
	IKAN_GURAME_BAKAR,
	KAKAP_BAKAR_JAHE,
	KEDAI_IKAN_BAKAR_ACEH,
	KEPITING_BAKAR,
	KEPITING_BUMBU_KUNING,
	KEPITING_MASAK_CUKA,
	KEPITING_REBUS,
	KEPITING_SAOS_PADANG,
	KEPITING_SAOS_TIRAM,
	KERANG_HIJAU_ASAM_MANIS,
	LESEHAN_IKAN_LALAPAN,
	LOBSTER_BUMBU_BALI,
	LOBSTER_PANGGANG,
	MANG_OYO,
	NY_KAMTO,
	PONDOK_UDANG_BAKAR,
	RUMAH_MAKAN_BETAWI,
	RUMAH_MAKAN_HJ_DONI,
	RUMAH_MAKAN_MAK_SYUKUR,
	RUMAH_MAKAN_PAK_GENDUT,
	SEAFOOD_BARRU,
	SEAFOOD_NUSANTARA,
	SOP_IKAN,
	SOTONG_SAOS_MENTEGA,
	TUMIS_CUMI,
	UDANG_BAKAR_KECAP,
	UDANG_GORENG,
	UDANG_REBUS_SAOS_LEMON,
} from '@/assets';
import { IMenu, IRestaurant } from '@/types';

export const mockDataRestaurants: IRestaurant[] = [
	{
		name: 'Seafood Barru',
		city: 'Barru',
		subdistrict: 'Kecamatan Tanete Riaja',
		address: 'Jl. Merdeka No.12',
		phone: '+6281234567890',
		description: '',
		thumbnail: SEAFOOD_BARRU,
		owner_id: '64b3f3f6d1f8a83b7f4d29e1',
		menus_id: [],
	},
	{
		name: 'Seafood Nusantara',
		city: 'Barru',
		subdistrict: 'Kecamatan Tanete Rilau',
		address: 'Jl. Sudirman No.34',
		phone: '+6281234567891',
		description: '',
		thumbnail: SEAFOOD_NUSANTARA,
		owner_id: '64b3f3f6d1f8a83b7f4d29e2',
		menus_id: [],
	},
	{
		name: 'Kedai Ikan Bakar Aceh',
		city: 'Barru',
		subdistrict: 'Kecamatan Barru',
		address: 'Jl. Teuku Umar No.21',
		phone: '+6281234567892',
		description: '',
		thumbnail: KEDAI_IKAN_BAKAR_ACEH,
		owner_id: '64b3f3f6d1f8a83b7f4d29e3',
		menus_id: [],
	},
	{
		name: 'Pondok Udang Bakar',
		city: 'Barru',
		subdistrict: 'Kecamatan Soppeng Riaja',
		address: 'Jl. Diponegoro No.5',
		phone: '+6281234567893',
		description: '',
		thumbnail: PONDOK_UDANG_BAKAR,
		owner_id: '64b3f3f6d1f8a83b7f4d29e4',
		menus_id: [],
	},
	{
		name: 'Cafe Laut Indah',
		city: 'Barru',
		subdistrict: 'Kecamatan Mallusetasi',
		address: 'Jl. Ahmad Yani No.67',
		phone: '+6281234567894',
		description: '',
		thumbnail: CAFE_LAUT_INDAH,
		owner_id: '64b3f3f6d1f8a83b7f4d29e5',
		menus_id: [],
	},
	{
		name: 'Rumah Makan Betawi',
		city: 'Barru',
		subdistrict: 'Kecamatan Pujananting',
		address: 'Jl. Veteran No.18',
		phone: '+6281234567895',
		description: '',
		thumbnail: RUMAH_MAKAN_BETAWI,
		owner_id: '64b3f3f6d1f8a83b7f4d29e6',
		menus_id: [],
	},
	{
		name: 'Seafood Malang',
		city: 'Barru',
		subdistrict: 'Kecamatan Balusu',
		address: 'Jl. Raya No.22',
		phone: '+6281234567896',
		description: '',
		thumbnail: BAKSO_SEAFOOD_MALANG,
		owner_id: '64b3f3f6d1f8a83b7f4d29e7',
		menus_id: [],
	},
	{
		name: 'Rumah Makan Pak Gendut',
		city: 'Barru',
		subdistrict: 'Kecamatan Tanete Riaja',
		address: 'Jl. Kenari No.23',
		phone: '+6281234567897',
		description: '',
		thumbnail: RUMAH_MAKAN_PAK_GENDUT,
		owner_id: '64b3f3f6d1f8a83b7f4d29e8',
		menus_id: [],
	},
	{
		name: 'Gado-Gado Seafood Bu Rini',
		city: 'Barru',
		subdistrict: 'Kecamatan Tanete Rilau',
		address: 'Jl. Pramuka No.45',
		phone: '+6281234567898',
		description: '',
		thumbnail: GADO2_SEAFOOD_BU_RINI,
		owner_id: '64b3f3f6d1f8a83b7f4d29e9',
		menus_id: [],
	},
	{
		name: 'Mang Oyo',
		city: 'Barru',
		subdistrict: 'Kecamatan Barru',
		address: 'Jl. Anggrek No.12',
		phone: '+6281234567899',
		description: '',
		thumbnail: MANG_OYO,
		owner_id: '64b3f3f6d1f8a83b7f4d29ea',
		menus_id: [],
	},
	{
		name: 'Rumah Makan Mak Syukur',
		city: 'Barru',
		subdistrict: 'Kecamatan Soppeng Riaja',
		address: 'Jl. Andi Mappatola No.17',
		phone: '+6281234567800',
		description: '',
		thumbnail: RUMAH_MAKAN_MAK_SYUKUR,
		owner_id: '64b3f3f6d1f8a83b7f4d29eb',
		menus_id: [],
	},
	{
		name: 'Ny. Kamto',
		city: 'Barru',
		subdistrict: 'Kecamatan Mallusetasi',
		address: 'Jl. Raden Saleh No.33',
		phone: '+6281234567801',
		description: '',
		thumbnail: NY_KAMTO,
		owner_id: '64b3f3f6d1f8a83b7f4d29ec',
		menus_id: [],
	},
	{
		name: 'Rumah Makan H. Doni',
		city: 'Barru',
		subdistrict: 'Kecamatan Pujananting',
		address: 'Jl. Pelita No.21',
		phone: '+6281234567802',
		description: '',
		thumbnail: RUMAH_MAKAN_HJ_DONI,
		owner_id: '64b3f3f6d1f8a83b7f4d29ed',
		menus_id: [],
	},
	{
		name: 'Lesehan Ikan Lalapan',
		city: 'Barru',
		subdistrict: 'Kecamatan Balusu',
		address: 'Jl. Kalimantan No.54',
		phone: '+6281234567803',
		description: '',
		thumbnail: LESEHAN_IKAN_LALAPAN,
		owner_id: '64b3f3f6d1f8a83b7f4d29ee',
		menus_id: [],
	},
];

export const mockDataMenus: IMenu[] = [
	{
		name: 'Udang Goreng',
		description: 'Udang goreng tepung dengan sambal',
		price: 30000,
		category: 'udang',
		thumbnail: UDANG_GORENG,
		restaurant_id: '64b3f3f6d1f8a83b7f4d29e1',
		status: 1,
	},
	{
		name: 'Kepiting Saus Tiram',
		description: 'Kepiting dimasak dengan saus tiram',
		price: 50000,
		category: 'kepiting',
		thumbnail: KEPITING_SAOS_TIRAM,
		restaurant_id: '64b3f3f6d1f8a83b7f4d29e2',
		status: 1,
	},
	{
		name: 'Cumi Asam Manis',
		description: 'Cumi-cumi dengan saus asam manis',
		price: 40000,
		category: 'cumi',
		thumbnail: CUMI_ASAM_MANIS,
		restaurant_id: '64b3f3f6d1f8a83b7f4d29e3',
		status: 1,
	},
	{
		name: 'Ikan Bakar Kecap',
		description: 'Ikan bakar dengan bumbu kecap',
		price: 35000,
		category: 'ikan',
		thumbnail: IKAN_BAKAR_KECAP,
		restaurant_id: '64b3f3f6d1f8a83b7f4d29e4',
		status: 1,
	},
	{
		name: 'Sop Ikan',
		description: 'Sup ikan segar dengan sayuran',
		price: 30000,
		category: 'ikan',
		thumbnail: SOP_IKAN,
		restaurant_id: '64b3f3f6d1f8a83b7f4d29e5',
		status: 1,
	},
	{
		name: 'Lobster Panggang',
		description: 'Lobster panggang dengan bumbu khas',
		price: 75000,
		category: 'lobster',
		thumbnail: LOBSTER_PANGGANG,
		restaurant_id: '64b3f3f6d1f8a83b7f4d29e6',
		status: 1,
	},
	{
		name: 'Kepiting Rebus',
		description: 'Kepiting rebus dengan bumbu rempah',
		price: 55000,
		category: 'kepiting',
		thumbnail: KEPITING_REBUS,
		restaurant_id: '64b3f3f6d1f8a83b7f4d29e7',
		status: 1,
	},
	{
		name: 'Cumi Bakar Teriyaki',
		description: 'Cumi bakar dengan saus teriyaki',
		price: 35000,
		category: 'cumi',
		thumbnail: CUMI_BAKAR_TERIYAKI,
		restaurant_id: '64b3f3f6d1f8a83b7f4d29e8',
		status: 1,
	},
	{
		name: 'Ikan Gurame Asam Manis',
		description: 'Ikan gurame dengan saus asam manis',
		price: 40000,
		category: 'ikan',
		thumbnail: IKAN_GURAME_ASAM_MANIS,
		restaurant_id: '64b3f3f6d1f8a83b7f4d29e9',
		status: 1,
	},
	{
		name: 'Tumis Cumi',
		description: 'Cumi tumis dengan sayuran segar',
		price: 35000,
		category: 'cumi',
		thumbnail: TUMIS_CUMI,
		restaurant_id: '64b3f3f6d1f8a83b7f4d29eb',
		status: 1,
	},
	{
		name: 'Kepiting Saus Padang',
		description: 'Kepiting dengan saus Padang pedas',
		price: 60000,
		category: 'kepiting',
		thumbnail: KEPITING_SAOS_PADANG,
		restaurant_id: '64b3f3f6d1f8a83b7f4d29ec',
		status: 1,
	},
	{
		name: 'Kakap Bakar Jahe',
		description: 'Ikan kakap bakar dengan bumbu rempah',
		price: 35000,
		category: 'ikan',
		thumbnail: KAKAP_BAKAR_JAHE,
		restaurant_id: '64b3f3f6d1f8a83b7f4d29ed',
		status: 1,
	},
	{
		name: 'Cumi Goreng Tepung',
		description: 'Cumi goreng tepung renyah',
		price: 30000,
		category: 'cumi',
		thumbnail: CUMI_GORENG_TEPUNG,
		restaurant_id: '64b3f3f6d1f8a83b7f4d29ee',
		status: 1,
	},
	{
		name: 'Kepiting Bumbu Kuning',
		description: 'Kepiting dengan bumbu kuning khas',
		price: 55000,
		category: 'kepiting',
		thumbnail: KEPITING_BUMBU_KUNING,
		restaurant_id: '64b3f3f6d1f8a83b7f4d29e1',
		status: 1,
	},
	{
		name: 'Sotong Saus Mentega',
		description: 'Sotong dengan saus mentega',
		price: 50000,
		category: 'sotong',
		thumbnail: SOTONG_SAOS_MENTEGA,
		restaurant_id: '64b3f3f6d1f8a83b7f4d29e2',
		status: 1,
	},
	{
		name: 'Ikan Bakar Jimbaran',
		description: 'Ikan bakar ala Jimbaran',
		price: 40000,
		category: 'ikan',
		thumbnail: IKAN_BAKAR_JIMBARAN,
		restaurant_id: '64b3f3f6d1f8a83b7f4d29e3',
		status: 1,
	},
	{
		name: 'Udang Bakar Kecap',
		description: 'Udang bakar dengan kecap manis',
		price: 35000,
		category: 'udang',
		thumbnail: UDANG_BAKAR_KECAP,
		restaurant_id: '64b3f3f6d1f8a83b7f4d29e4',
		status: 1,
	},
	{
		name: 'Cumi Saus Padang',
		description: 'Cumi dengan saus Padang pedas',
		price: 35000,
		category: 'cumi',
		thumbnail: CUMI_SAUS_PADANG,
		restaurant_id: '64b3f3f6d1f8a83b7f4d29e5',
		status: 1,
	},
	{
		name: 'Kepiting Bakar',
		description: 'Kepiting bakar dengan bumbu',
		price: 60000,
		category: 'kepiting',
		thumbnail: KEPITING_BAKAR,
		restaurant_id: '64b3f3f6d1f8a83b7f4d29e6',
		status: 1,
	},
	{
		name: 'Ikan Gurame Bakar',
		description: 'Ikan gurame bakar dengan sambal',
		price: 40000,
		category: 'ikan',
		thumbnail: IKAN_GURAME_BAKAR,
		restaurant_id: '64b3f3f6d1f8a83b7f4d29e7',
		status: 1,
	},
	{
		name: 'Cumi Rebus',
		description: 'Cumi rebus dengan bumbu rempah',
		price: 30000,
		category: 'cumi',
		thumbnail: CUMI_REBUS,
		restaurant_id: '64b3f3f6d1f8a83b7f4d29e8',
		status: 1,
	},
	{
		name: 'Lobster Bumbu Bali',
		description: 'Lobster dengan bumbu Bali',
		price: 80000,
		category: 'lobster',
		thumbnail: LOBSTER_BUMBU_BALI,
		restaurant_id: '64b3f3f6d1f8a83b7f4d29e9',
		status: 1,
	},
	{
		name: 'Cumi Tumis Pedas',
		description: 'Cumi tumis pedas dengan cabai',
		price: 35000,
		category: 'cumi',
		thumbnail: CUMI_TUMIS_PEDAS,
		restaurant_id: '64b3f3f6d1f8a83b7f4d29eb',
		status: 1,
	},
	{
		name: 'Ikan Bandeng Bakar',
		description: 'Ikan bandeng bakar dengan bumbu khas',
		price: 35000,
		category: 'ikan',
		thumbnail: IKAN_BANDENG_BAKAR,
		restaurant_id: '64b3f3f6d1f8a83b7f4d29ec',
		status: 1,
	},
	{
		name: 'Udang Rebus Saus Lemon',
		description: 'Udang rebus dengan saus lemon',
		price: 30000,
		category: 'udang',
		thumbnail: UDANG_REBUS_SAOS_LEMON,
		restaurant_id: '64b3f3f6d1f8a83b7f4d29ed',
		status: 1,
	},
	{
		name: 'Kepiting Masak Cuka',
		description: 'Kepiting masak dengan cuka',
		price: 55000,
		category: 'kepiting',
		thumbnail: KEPITING_MASAK_CUKA,
		restaurant_id: '64b3f3f6d1f8a83b7f4d29ee',
		status: 1,
	},
	{
		name: 'Anggur Laut Cocol Sambal',
		description: 'Anggur Laut degan sambal pedas',
		price: 10000,
		category: 'anggur_laut',
		thumbnail: ANGGUR_LAUT_COCOL_SAMBAL,
		restaurant_id: '64b3f3f6d1f8a83b7f4d29e1',
		status: 1,
	},
	{
		name: 'Kerang Hijau Asam Manis',
		description:
			'Kerang hijau yang dimasak dengan bumbu asam manis',
		price: 20000,
		category: 'kerang',
		thumbnail: KERANG_HIJAU_ASAM_MANIS,
		restaurant_id: '64b3f3f6d1f8a83b7f4d29e2',
		status: 1,
	},
];
