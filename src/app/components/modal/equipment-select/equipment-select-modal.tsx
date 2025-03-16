import React, { useMemo } from 'react'
import { Box, Button, Modal, Typography } from '@mui/material'
import {
  RSEquipment,
  RSEquipmentType,
  SORTED_ALL_EQUIPMENT_ACCESSORIES,
  SORTED_ALL_EQUIPMENT_ARMORS,
  SORTED_ALL_EQUIPMENT_WEAPONS,
} from '@/const/archive/equipment.const'
import { EquipmentBoxResponsive } from '@/app/equipments/rs-equipment-list'
import { ExtendedRSEquipment } from '@/app/equipments/equipment.type'

function EquipmentSelectModal({
  isOpen,
  closeModal,
  onSelect,
  data,
}: {
  isOpen: boolean
  closeModal: () => void
  onSelect: (item: any, index: number) => void
  data: {
    index: number
    equipment: ExtendedRSEquipment | undefined
    type: RSEquipmentType
  }
}) {
  const handleItemSelect = (item: any) => {
    onSelect(item, data.index)
  }

  const selectableEquipments = useMemo(() => {
    const selectedName = data?.equipment && data.equipment?.name
    if (data.type === RSEquipmentType.WEAPON) {
      if (!selectedName) return SORTED_ALL_EQUIPMENT_WEAPONS
      return SORTED_ALL_EQUIPMENT_WEAPONS.filter((eq) => selectedName !== eq.name)
    }

    if (data.type === RSEquipmentType.ARMOR) {
      if (!selectedName) return SORTED_ALL_EQUIPMENT_ARMORS
      return SORTED_ALL_EQUIPMENT_ARMORS.filter((eq) => selectedName !== eq.name)
    }

    if (data.type === RSEquipmentType.ACCESSORY) {
      if (!selectedName) return SORTED_ALL_EQUIPMENT_ACCESSORIES
      return SORTED_ALL_EQUIPMENT_ACCESSORIES.filter((eq) => selectedName !== eq.name)
    }
  }, [data])

  return (
    <Modal
      open={isOpen}
      onClose={closeModal}
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
    >
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          display: 'flex',
          justifyContent: 'center', // 수평 중앙 정렬
          alignItems: 'center', // 수직 중앙 정렬
        }}
        className="modal-container max-w-[800px] mx-auto min-w-[90%]"
      >
        <div className="bg-white p-[15px] rounded-md">
          <Typography id="modal-title" variant="h6" component="h2">
            장비 선택
          </Typography>
          <div className="flex flex-wrap gap-[4px] overflow-y-scroll max-h-[50vh]">
            {(selectableEquipments || []).map((equipment, index) => {
              return (
                <>
                  {index === 0 && (
                    <div key="c_s_modal_remove" onClick={() => handleItemSelect({})}>
                      <div className="w-[90px] h-[90px] flex items-center justify-center border-2 border-red-500">
                        <div className="text-center text-red-500 ff-dh text-[20px]">제거</div>
                      </div>
                    </div>
                  )}
                  <div key={`c_s_modal_${index}`} onClick={() => handleItemSelect(equipment)}>
                    <div className="w-[90px]">
                      <EquipmentBoxResponsive equipment={equipment} />
                      <div className="text-center">{equipment.name}</div>
                    </div>
                  </div>
                </>
              )
            })}
          </div>
          <Button
            onClick={closeModal}
            sx={{ mt: 3 }}
            variant="contained"
            color="error"
            className="w-full"
          >
            닫기
          </Button>
        </div>
      </Box>
    </Modal>
  )
}

export default EquipmentSelectModal
