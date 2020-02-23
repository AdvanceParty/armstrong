SPACE_ID=$(awk '/spaceId=/' .env | cut -d"=" -f2)
OUT_DIR=contentful_backup
FILE_NAME_CONTENT_MODEL=db_content_model.json
FILE_NAME_CONTENT=db_content.json

clear
echo "Exporting model   from $SPACE_ID"
echo ""

mkdir -p $OUT_DIR 
contentful space use --space-id $SPACE_ID
contentful space export \
    --export-dir $OUT_DIR \
    --skip-content \
    --content-file $FILE_NAME_CONTENT_MODEL

clear
echo "Exporting model   from $SPACE_ID ... √ Done"
echo "Exporting content from $SPACE_ID"
echo ""
contentful space export \
    --export-dir $OUT_DIR \
    --content-model-only \
    --content-file $FILE_NAME_CONTENT

clear

echo "Exporting model   from $SPACE_ID ... √ Done"
echo "Exporting content from $SPACE_ID ... √ Done"
echo ""
echo " ===============  Export Summary  =================="
echo "  space:          $SPACE_ID as"
echo "  db structure:   $OUT_DIR/$FILE_NAME_CONTENT_MODEL"
echo "  db content [1]: $OUT_DIR/$FILE_NAME_CONTENT"
echo ""
echo "  [1] NOTE: This is the text content only, NOT media files"
echo "      To export all media, use the contentful CLI directly."
echo "      Media files should be excluded from your git repository"
echo "      to prevent repo bloat."
echo ""