import React, { useMemo } from 'react'
import { Box, Button, Modal, Typography } from '@mui/material'
import { RS_CHARACTERS } from '@/const/character/character.const'
import { RsCharacterCardResponsiveShorten } from '@/app/components/character-frame/rs-character-card-responsive'

function CharacterSelectModal({
  isOpen,
  closeModal,
  onSelect,
  data,
}: {
  isOpen: boolean
  closeModal: () => void
  onSelect: (item: any) => void
  data: {
    index: number
    characters: Array<
      { name: string; equipments?: Array<{ name: string } | undefined> } | undefined
    >
  }
}) {
  const handleItemSelect = (item: any) => {
    onSelect(item)
  }

  const selectableCharacters = useMemo(() => {
    const names = data.characters.filter((c) => !!c).map((c) => c.name)
    return RS_CHARACTERS.filter((c) => !names.includes(c.originName))
  }, [data.characters])

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
            승무원 선택
          </Typography>
          <div className="flex flex-wrap gap-[4px] overflow-y-scroll max-h-[50vh]">
            {selectableCharacters.map((character, index) => {
              return (
                <div key={`c_s_modal_${index}`} onClick={() => handleItemSelect(character)}>
                  <div className="w-[90px]">
                    <RsCharacterCardResponsiveShorten character={character} height={100} />
                    <div className="text-center">{character.name}</div>
                  </div>
                </div>
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

export default CharacterSelectModal
