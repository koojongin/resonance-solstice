import { MAP_CHEONGMYEONG_DATA_CENTER } from '@/const/map/cheongmyeong.const'
import { MAP_FREE_TRANSPORT_7 } from '@/const/map/free-transport-7.const'
import { RSMap } from '@/const/map/map.interface'
import { MAP_SHUGURIS } from '@/const/map/shuguris.const'
import { MAP_RAILWAY } from '@/const/map/railway.const'
import { MAP_MANDER } from '@/const/map/mander.const'
import { MAP_ANITA_ARMORY } from '@/const/map/anita-armory.const'
import { MAP_ANITA_LAUNCHER } from '@/const/map/anita-launcher.const'
import { MAP_ANITA_ENERGY } from '@/const/map/anita-energy.const'
import { MAP_WONDERLAND } from '@/const/map/wonderland.const'
import { MAP_HWANGONE } from '@/const/map/hwangone.const'
import { MAP_WOONSOO_BRIDGE } from '@/const/map/wonsoo-bridge.const'
import { MAP_WONSEONG_BRIDGE } from '@/const/map/wonseong-bridge.const'
import { MAP_HWERYU_TOWER } from '@/const/map/hweryu-tower.const'
import { MAP_CAPE_CITY } from '@/const/map/cape-city.const'
import { MAP_GRONU_CITY } from '@/const/map/gronu-city.const'
import { MAP_SEOWOO_STATION } from '@/const/map/seowoo-station.const'
import { MAP_STORM_EYE_CITY } from '@/const/map/storm-eye-city.const'

export const ALL_NAMED_MAPS: RSMap[] = [
  MAP_CHEONGMYEONG_DATA_CENTER,
  MAP_FREE_TRANSPORT_7,
  MAP_SHUGURIS,
  MAP_RAILWAY,
  MAP_MANDER,
  MAP_ANITA_ARMORY,
  MAP_ANITA_LAUNCHER,
  MAP_ANITA_ENERGY,
  MAP_WONDERLAND,
  MAP_HWANGONE,
  MAP_WOONSOO_BRIDGE,
  MAP_WONSEONG_BRIDGE,
  MAP_HWERYU_TOWER,
  MAP_CAPE_CITY,
  MAP_GRONU_CITY,
  MAP_SEOWOO_STATION,
  MAP_STORM_EYE_CITY,
]

export const ALL_MAP_NAMES: string[] = ALL_NAMED_MAPS.map((data) => data.name)
